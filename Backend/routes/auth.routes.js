// routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.get("/check-session", authController.checkSession);
router.post("/register", authController.register);
router.post("/verify-email", authController.verifyEmail);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
