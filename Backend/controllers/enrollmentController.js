const enrollmentService = require("../services/enrollment.service");
const databasemodel = require("../models/dbModels");

exports.enroll = async (req, res) => {
  const enrollmentChecker = await databasemodel.findCoursesByid(
    req.session.userId,
    req.params.courseId
  );
  // console.log(enrollmentChecker);
  if (enrollmentChecker) {
    return res.status(400).json({ message: "Already enrolled!" });
  }

  try {
    // console.log(req.body);
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
