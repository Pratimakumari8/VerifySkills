import fs from "fs";
import crypto from "crypto";
import Certificate from "../models/Certificates.js";
import { storeHashOnBlockchain } from "../services/blockchainService.js";

const generateCertificateHash = (filePath, certificateData) => {
  const fileBuffer = fs.readFileSync(filePath);

  return crypto
    .createHash("sha256")
    .update(fileBuffer)
    .update(JSON.stringify(certificateData))
    .digest("hex");
};

// Institute uploads certificate
export const uploadCertificate = async (req, res) => {
  try {
    const { studentName, studentEmail, courseName, certificateId, instituteName } =
      req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Certificate file is required" });
    }

    if (
      !studentName ||
      !studentEmail ||
      !courseName ||
      !certificateId ||
      !instituteName
    ) {
      return res.status(400).json({ message: "All fields are required" });
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
      req.file.path,
      certificateData
    );

    const blockchainTxHash = await storeHashOnBlockchain(certificateHash);

    const certificate = await Certificate.create({
      studentName,
      studentEmail,
      courseName,
      certificateId,
      instituteName,
      certificateFile: req.file.path,
      certificateHash,
      blockchainTxHash,
      issuedBy: req.user._id,
    });

    return res.status(201).json({
      message: "Certificate uploaded successfully",
      certificate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Certificate upload failed",
      error: error.message,
    });
  }
};

// Student views own certificates
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

// Institute views uploaded certificates
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

// Employer verifies certificate by hash
export const verifyCertificate = async (req, res) => {
  try {
    const { hash } = req.params;

    const certificate = await Certificate.findOne({
      certificateHash: hash,
    });

    if (!certificate) {
      return res.status(404).json({
        verified: false,
        message: "Invalid certificate hash",
      });
    }

    return res.status(200).json({
      verified: true,
      message: "Certificate verified successfully",
      certificate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Verification failed",
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