// routes/enrollmentRoutes.js
const express = require("express");
const enrollmentController = require("../controllers/enrollmentController");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/authMiddleware");


router.post("/enroll/:courseId",isAuthenticated, enrollmentController.enroll);
router.delete("/unenroll/:courseId",isAuthenticated, enrollmentController.unenroll);
router.get("/", isAuthenticated, enrollmentController.getEnrollments);

module.exports = router;
