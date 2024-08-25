// routes/index.js
const express = require("express");
const authRoutes = require("./auth.routes");
const courseRoutes = require("./course.routes");
const enrollmentRoutes = require("./enrollment.routes");
const progressRoutes = require("./progress.routes");
const userRoutes = require("./user.routes");
const adminRoutes = require("./admin.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/enrollments", enrollmentRoutes);
router.use("/progress", progressRoutes);
router.use("/user", userRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
