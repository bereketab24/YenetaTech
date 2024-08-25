// controllers/userController.js
const userService = require("../services/user.service");
const { validateEmail } = require("../utils/validators");
const dbModels = require("../models/dbModels");

exports.getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.session.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { email, name } = req.body;

  // Validate email
  if (email && !validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // Update user logic...
  try {
    const updatedUser = await userService.updateUser(
      req.session.userId,
      req.body
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
