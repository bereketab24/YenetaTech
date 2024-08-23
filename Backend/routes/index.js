// routes/index.js
const express = require("express");
const authRoutes = require("./authRoutes");
const courseRoutes = require("./courseRoutes");
const enrollmentRoutes = require("./enrollmentRoutes");
const progressRoutes = require("./progressRoutes");
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/enrollments", enrollmentRoutes);
router.use("/progress", progressRoutes);
router.use("/user", userRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
