// controllers/adminController.js
const adminService = require("../services/admin.service");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await adminService.getAllUsers();
    
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log("JHIIIII");
    const deleted = await adminService.deleteUser(req.params.userId);
    console.log("The thing in deleted is: ", deleted);
    console.log("JHIIIII");
    if (!deleted) {
      console.log("JHIIIII");
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
