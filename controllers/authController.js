import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import admin from "../config/firebaseAdmin.js";

// helper function
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

const sendUserResponse = (res, statusCode, message, user, authProvider) => {
  const token = generateToken(user);

  return res.status(statusCode).json({
    message,
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      authProvider,
    },
  });
};

// ================= SIGNUP =================
export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    if (!firstName || !lastName || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    return sendUserResponse(res, 201, "Signup successful", user, "local");
  } catch (error) {
    return res.status(500).json({
      message: "Signup failed",
      error: error.message,
    });
  }
};

// ================= LOGIN =================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });

    if (!user || !user.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return sendUserResponse(res, 200, "Login successful", user, "local");
  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

// ================= GOOGLE AUTH =================
export const googleAuth = async (req, res) => {
  try {
    const { idToken, role } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "Google token is required" });
    }

    const decoded = await admin.auth().verifyIdToken(idToken);

    const email = decoded.email;
    const name = decoded.name || "Google User";

    let user = await User.findOne({ email });

    // First-time Google signup: ask role first
    if (!user && !role) {
      return res.status(200).json({
        message: "Role required for first time Google signup",
        needsRole: true,
      });
    }

    // Create Google user only after role is selected
    if (!user) {
      const nameParts = name.split(" ");

      user = await User.create({
        firstName: nameParts[0] || "Google",
        lastName: nameParts.slice(1).join(" ") || "User",
        email,
        password: "",
        role,
      });
    }

    return sendUserResponse(res, 200, "Google login successful", user, "google");
  } catch (error) {
    console.log("Google Auth Error:", error);

    return res.status(500).json({
      message: "Google authentication failed",
      error: error.message,
    });
  }
};

// ================= UPDATE PROFILE =================
export const updateProfile = async (req, res) => {
  try {
    const { id, firstName, lastName, email, phone, role, profilePhoto } =
      req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        phone,
        role,
        profilePhoto,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        phone: updatedUser.phone,
        role: updatedUser.role,
        profilePhoto: updatedUser.profilePhoto,
        authProvider: updatedUser.password ? "local" : "google",
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Profile update failed",
      error: error.message,
    });
  }
};