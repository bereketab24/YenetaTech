const authService = require("../services/authServices");
const { validateEmail, validatePassword } = require("../utils/validators");
const dbModels = require("../models/dbModels");

exports.register = async (req, res) => {
  console.log("Register request received");
  const { username, email, password, roleId } = req.body;
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

  // Continue with the registration process...
  try {
    const result = await authService.register(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
      return res.status(500).json({ message: "Logout failed" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logout successful" });
  });
};
