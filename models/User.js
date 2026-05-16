import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: false,
    },
    phone: {
  type: String,
  default: "",
},

profilePhoto: {
  type: String,
  default: "",
},
   role: {
  type: String,
  enum: ["Certificate holder", "Institute", "Employer", "User"],
  default: "Certificate holder"
},
  },
  { timestamps: true }
);

export default mongoose.model("Certificate holder", userSchema);