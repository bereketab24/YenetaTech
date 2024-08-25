// routes/progressRoutes.js
const express = require("express");
const progressController = require("../controllers/progressController");
const router = express.Router();

router.get("/:courseId", progressController.getProgress);
router.put("/:courseId", progressController.updateProgress);

module.exports = router;
