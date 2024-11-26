// routes/adminRoutes.js
const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

router.get("/users", isAuthenticated, isAdmin, adminController.getAllUsers);
router.delete(
  "/users/:userId",
  isAuthenticated,
  isAdmin,
  adminController.deleteUser
);

module.exports = router;
