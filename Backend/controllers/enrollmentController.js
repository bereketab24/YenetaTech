const enrollmentService = require("../services/enrollment.service");

exports.enroll = async (req, res) => {
  try {
    const result = await enrollmentService.enroll(
      req.session.userId,
      req.params.courseId
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.unenroll = async (req, res) => {
  try {
    const result = await enrollmentService.unenroll(
      req.session.userId,
      req.params.courseId
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEnrollments = async (req, res) => {
  try {
    const enrollments = await enrollmentService.getEnrollments(
      req.session.userId
    );
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
