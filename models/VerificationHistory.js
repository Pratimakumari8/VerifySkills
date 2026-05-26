import mongoose from "mongoose";

const verificationHistorySchema = new mongoose.Schema(
  {
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Certificate holder",
      required: true,
    },

    hash: {
      type: String,
      required: true,
    },

    valid: {
      type: Boolean,
      required: true,
    },

    message: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("VerificationHistory", verificationHistorySchema);