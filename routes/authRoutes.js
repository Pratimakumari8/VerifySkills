import express from "express";
import { signup, login, googleAuth,updateProfile, } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/google", googleAuth); // ✅ added
router.put("/update-profile", updateProfile);

export default router;