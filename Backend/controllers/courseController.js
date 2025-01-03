const courseService = require("../services/course.service");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseService.getCourseById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// exports.addCourse = async (req, res) => {
//   try {
//     const course = await courseService.addCourse(req.body);
//     res.status(201).json(course);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.addCourse = async (req, res) => {
//   try {
//     const courseData = req.body;
//     const courseId = await courseService.addCourse(courseData);

//     // Send a response back to the client
//     res.status(201).json({
//       message: "Course added successfully",
//       courseId: courseId,
//     });
//   } catch (error) {
//     console.error("Error adding course:", error);
//     res
//       .status(500)
//       .json({ message: "Error adding course", error: error.message });
//   }
// };

// controllers/courseController.js

exports.addCourse = async (req, res) => {
  try {
    const courseData = req.body;
    const courseId = await courseService.addCourse(courseData);

    // Send a response back to the client
    res.status(201).json({
      message: "Course added successfully",
      courseId: courseId,
    });
  } catch (error) {
    console.error("Error adding course:", error);
    res
      .status(500)
      .json({ message: "Error adding course", error: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    console.log(req.params.id)
    const updatedCourse = await courseService.updateCourse(
      req.params.id,
      req.body
    );
    // console.log(updatedCourse);
    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const deleted = await courseService.deleteCourse(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
