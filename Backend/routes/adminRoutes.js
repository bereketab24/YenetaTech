// routes/adminRoutes.js
const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/users", adminController.getAllUsers);
router.delete("/users/:userId", adminController.deleteUser);

module.exports = router;
