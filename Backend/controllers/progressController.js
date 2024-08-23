// controllers/progressController.js
const progressService = require("../services/progressService");

exports.getProgress = async (req, res) => {
  try {
    const progress = await progressService.getProgress(
      req.session.userId,
      req.params.courseId
    );
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    const updatedProgress = await progressService.updateProgress(
      req.session.userId,
      req.params.courseId,
      req.body
    );
    res.status(200).json(updatedProgress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
