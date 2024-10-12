// routes/courseRoutes.js
const express = require("express");
const courseController = require("../controllers/courseController");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.post("/", isAuthenticated, isAdmin, courseController.addCourse);
router.put("/:id", isAuthenticated, isAdmin, courseController.updateCourse);
router.delete("/:id", isAuthenticated, isAdmin, courseController.deleteCourse);

module.exports = router;
