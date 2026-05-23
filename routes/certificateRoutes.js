import express from "express";
import multer from "multer";
import {
  uploadCertificate,
  getStudentCertificates,
  getInstituteCertificates,
  verifyCertificate,
  deleteCertificate,
} from "../controllers/certificateController.js";
import { protect, allowRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Institute upload certificate
router.post(
  "/upload",
  protect,
  allowRoles("Institute"),
  upload.single("certificate"),
  uploadCertificate
);

// Student view own certificate
router.get(
  "/student/my-certificates",
  protect,
  allowRoles("Certificate holder"),
  getStudentCertificates
);

// Institute view uploaded certificates
router.get(
  "/institute/my-certificates",
  protect,
  allowRoles("Institute"),
  getInstituteCertificates
);
router.delete(
  "/:id",
  protect,
  allowRoles("Institute"),
  deleteCertificate
);

// Employer/public verification using hash
router.get("/verify/:hash", verifyCertificate);

export default router;