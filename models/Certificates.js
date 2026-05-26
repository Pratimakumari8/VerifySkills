import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    studentEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    courseName: {
      type: String,
      required: true,
      trim: true,
    },

    certificateId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    issueDate: {
      type: Date,
      default: Date.now,
    },

    certificateUrl: {
      type: String,
      required: true,
    },

    cloudinaryPublicId: {
      type: String,
      required: true,
    },

    certificateHash: {
      type: String,
      required: true,
      unique: true,
    },

    blockchainTxHash: {
      type: String,
      required: true,
    },

    qrCodeUrl: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Revoked"],
      default: "Active",
    },

    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Certificate holder",
      required: true,
    },

    instituteName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Certificate", certificateSchema);