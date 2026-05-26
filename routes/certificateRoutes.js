import express from "express";
import multer from "multer";
import {
  uploadCertificate,
  getStudentCertificates,
  getInstituteCertificates,
  verifyCertificate,
  getVerificationHistory,
  deleteCertificate,
} from "../controllers/certificateController.js";
import { protect, allowRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post(
  "/upload",
  protect,
  allowRoles("Institute"),
  upload.single("certificate"),
  uploadCertificate
);

router.get(
  "/student/my-certificates",
  protect,
  allowRoles("Certificate holder"),
  getStudentCertificates
);

router.get(
  "/institute/my-certificates",
  protect,
  allowRoles("Institute"),
  getInstituteCertificates
);

router.get(
  "/verification-history",
  protect,
  allowRoles("Employer"),
  getVerificationHistory
);

router.get(
  "/verify/:hash",
  protect,
  allowRoles("Employer"),
  verifyCertificate
);

router.delete(
  "/:id",
  protect,
  allowRoles("Institute"),
  deleteCertificate
);

export default router;