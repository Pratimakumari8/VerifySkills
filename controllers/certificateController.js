import crypto from "crypto";
import QRCode from "qrcode";
import Certificate from "../models/Certificates.js";
import VerificationHistory from "../models/VerificationHistory.js";
import {
  storeHashOnBlockchain,
  verifyHashOnBlockchain,
} from "../services/blockchainService.js";
import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = (fileBuffer, originalName) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "verifyskills/certificates",
        resource_type: "auto",
        public_id: `${Date.now()}-${originalName.split(".")[0]}`,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    uploadStream.end(fileBuffer);
  });
};

const uploadQrToCloudinary = async (qrDataUrl, certificateId) => {
  const result = await cloudinary.uploader.upload(qrDataUrl, {
    folder: "verifyskills/qrcodes",
    public_id: `qr-${certificateId}-${Date.now()}`,
  });

  return result.secure_url;
};

const generateCertificateHash = (fileBuffer, certificateData) => {
  return crypto
    .createHash("sha256")
    .update(fileBuffer)
    .update(JSON.stringify(certificateData))
    .digest("hex");
};

const saveVerificationHistory = async (req, hash, valid, message) => {
  if (req.user && req.user.role === "Employer") {
    await VerificationHistory.create({
      employer: req.user._id,
      hash,
      valid,
      message,
    });
  }
};

export const uploadCertificate = async (req, res) => {
  try {
    const {
      studentName,
      studentEmail,
      courseName,
      certificateId,
      instituteName,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Certificate file is required",
      });
    }

    if (
      !studentName ||
      !studentEmail ||
      !courseName ||
      !certificateId ||
      !instituteName
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingCertificate = await Certificate.findOne({ certificateId });

    if (existingCertificate) {
      return res.status(400).json({
        message: "Certificate ID already exists",
      });
    }

    const certificateData = {
      studentName,
      studentEmail,
      courseName,
      certificateId,
      instituteName,
    };

    const certificateHash = generateCertificateHash(
      req.file.buffer,
      certificateData
    );

    const cloudinaryResult = await uploadToCloudinary(
      req.file.buffer,
      req.file.originalname
    );

    const blockchainTxHash = await storeHashOnBlockchain(certificateHash);

    const verificationUrl = `http://localhost:5173/verify-certificate?hash=${certificateHash}`;

    const qrDataUrl = await QRCode.toDataURL(verificationUrl);

    const qrCodeUrl = await uploadQrToCloudinary(qrDataUrl, certificateId);

    const certificate = await Certificate.create({
      studentName,
      studentEmail,
      courseName,
      certificateId,
      instituteName,
      certificateUrl: cloudinaryResult.secure_url,
      cloudinaryPublicId: cloudinaryResult.public_id,
      certificateHash,
      blockchainTxHash,
      qrCodeUrl,
      issuedBy: req.user._id,
    });

    return res.status(201).json({
      message: "Certificate uploaded successfully",
      certificate,
    });
  } catch (error) {
    console.log("Certificate Upload Error:", error.message);
    console.log(error);

    return res.status(500).json({
      message: "Certificate upload failed",
      error: error.message,
    });
  }
};

export const getStudentCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find({
      studentEmail: req.user.email,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Certificates fetched successfully",
      certificates,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch certificates",
      error: error.message,
    });
  }
};

export const getInstituteCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find({
      issuedBy: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Institute certificates fetched successfully",
      certificates,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch institute certificates",
      error: error.message,
    });
  }
};

export const verifyCertificate = async (req, res) => {
  try {
    const { hash } = req.params;

    const certificate = await Certificate.findOne({
      certificateHash: hash,
    });

    if (!certificate) {
      await saveVerificationHistory(
        req,
        hash,
        false,
        "Invalid certificate hash. No record found in MongoDB."
      );

      return res.status(404).json({
        valid: false,
        verified: false,
        message: "Invalid certificate hash. No record found in MongoDB.",
      });
    }

    if (certificate.status === "Revoked") {
      await saveVerificationHistory(
        req,
        hash,
        false,
        "Certificate has been revoked by institute."
      );

      return res.status(400).json({
        valid: false,
        verified: false,
        message: "Certificate has been revoked by institute.",
        certificate,
      });
    }

    // 🔥 BLOCKCHAIN FIRST VALIDATION
    const blockchainResult = await verifyHashOnBlockchain(
      hash,
      certificate.blockchainTxHash
    );

    if (!blockchainResult.valid) {
      await saveVerificationHistory(
        req,
        hash,
        false,
        blockchainResult.message ||
          "Certificate found in MongoDB but not verified on blockchain."
      );

      return res.status(400).json({
        valid: false,
        verified: false,
        message:
          blockchainResult.message ||
          "Certificate found in MongoDB but not verified on blockchain.",
        certificate,
      });
    }

    await saveVerificationHistory(
      req,
      hash,
      true,
      "Certificate verified successfully using MongoDB and Solana blockchain."
    );

    return res.status(200).json({
      valid: true,
      verified: true,
      message:
        "Certificate verified successfully using MongoDB and Solana blockchain.",
      certificate,
      blockchain: blockchainResult.blockchainData,
    });
  } catch (error) {
    return res.status(500).json({
      valid: false,
      verified: false,
      message: "Verification failed",
      error: error.message,
    });
  }
};

export const getVerificationHistory = async (req, res) => {
  try {
    const history = await VerificationHistory.find({
      employer: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Verification history fetched successfully",
      history,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch verification history",
      error: error.message,
    });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const { id } = req.params;

    const certificate = await Certificate.findOne({
      _id: id,
      issuedBy: req.user._id,
    });

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate not found or not authorized",
      });
    }

    await cloudinary.uploader.destroy(certificate.cloudinaryPublicId, {
      resource_type: "auto",
    });

    await Certificate.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Certificate deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Certificate delete failed",
      error: error.message,
    });
  }
};