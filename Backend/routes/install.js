// routes/install.js

const express = require("express");
const router = express.Router();
const installController = require("../controllers/installController");

// Setup the install route
router.get("/", installController.install);

module.exports = router;
