const authService = require("../services/auth.service");
const { validateEmail, validatePassword } = require("../utils/validators");
const dbModels = require("../models/dbModels");
const sendVerificationEmail = require("../utils/emailSender")
const crypto = require("crypto")


exports.register = async (req, res) => {
  console.log("Register request received");
  const { fullname, username, email, password, roleId,} = req.body;
  // email, password, name;
  console.log("Received data:", req.body);

  // Validate email
  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // Validate password
  if (!validatePassword(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long and contain a number",
    });
  }

  // Check if user already exists
  const existingUser = await dbModels.findUserByEmail(email);
  // await console.log("after evaluated", existingUser)
  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const verificationCode = crypto.randomInt(100000, 999999).toString

  await sendVerificationEmail(email, verificationCode);

  // Continue with the registration process...
  try {
    const result = await authService.register(req.body, verificationCode);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// controllers/authController.js
exports.verifyEmail = async (req, res) => {

  try {
    // Check if the code matches
    const result = await authService.verifyEmail(req.body)

    if (result.length === 0) {
      return res.status(400).json({ message: 'Invalid verification code or email' });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json(result);
  }
};


exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    req.session.userId = result.user.user_id; // Store user ID in session
    req.session.roleId = result.user.role_id; // Store user role in session
    res.status(200).json({
      message: "Login successull!",
      data: result,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error destroying session:", err);
      return res.status(500).json({ message: "Logout failed" });
    }
    res.clearCookie("connect.sid", {path : "/"});
    console.log("Session destroyed and cookie cleared");
    res.status(200).json({ message: "Logout successful" });
  });
};

exports.checkSession = (req, res) => {
  if (req.session && req.session.roleId) {
    return res.status(200).json({
      isAuthenticated: true,
      userId: req.session.userId,
      roleId: req.session.roleId,
    });
  } else {
    return res.status(200).json({
      isAuthenticated: false,
      message: "No Active Session",
    });
  }
};
