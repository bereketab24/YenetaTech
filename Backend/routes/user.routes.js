// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getUser);
router.put("/", userController.updateUser);

module.exports = router;
