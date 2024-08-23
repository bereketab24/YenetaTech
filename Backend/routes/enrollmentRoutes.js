// routes/enrollmentRoutes.js
const express = require("express");
const enrollmentController = require("../controllers/enrollmentController");
const router = express.Router();

router.post("/enroll/:courseId", enrollmentController.enroll);
router.delete("/unenroll/:courseId", enrollmentController.unenroll);
router.get("/", enrollmentController.getEnrollments);

module.exports = router;
