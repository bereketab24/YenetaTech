// services/courseService.js
const db = require("../config/database");

exports.getAllCourses = async () => {
  try {
    const [courses] = await db.query(`SELECT * FROM courses`);
    return courses;
  } catch (error) {
    throw new Error("Failed to fetch courses: " + error.message);
  }
};
// exports.getAllCourses = () => {
//   return new Promise((resolve, reject) => {
//     const sql = "SELECT * FROM courses";
//     db.query(sql, (err, results) => {
//       if (err) return reject(err);
//       resolve(results);
//     });
//   });
// };

exports.getCourseById = async (id) => {
  try {
    const sql = "SELECT * FROM courses WHERE course_id = ?";
    const [result] = await db.query(sql, [id]);
    return result[0];
  } catch (error) {
    throw new Error(error.message);
  }
};
exports.addCourse = async (courseData) => {
  try {
    const {
      course_name,
      description,
      trainer,
      course_fee,
      schedule,
      category,
      course_image,
      course_video_url,
      course_notes_url,
      course_assignment_url,
    } = courseData;
    const sql = `
        INSERT INTO courses (course_name, description, trainer, course_fee, schedule,category,course_image, course_video_url, course_notes_url, course_assignment_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)
    `;
    const values = [
      course_name,
      description,
      trainer,
      course_fee,
      schedule,
      category,
      course_image,
      course_video_url,
      course_notes_url,
      course_assignment_url,
    ];
    const [results] = await db.query(sql, values);
    return { id: results.insertId, ...courseData };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateCourse = async (id, courseData) => {
  // console.log(courseData)
  try {
    const {
      course_name,
      description,
      trainer,
      course_fee,
      schedule,
      category,
      course_image,
      course_video_url,
      course_notes_url,
      course_assignment_url,
    } = courseData;
    // console.log(course_name)
    const sql =
      "UPDATE courses SET course_name = ?, description = ?, trainer = ?, course_fee = ?, schedule = ?, category = ?, course_image = ?, course_video_url = ?, course_notes_url = ?, course_assignment_url = ? WHERE course_id = ?";

    const values = [
      course_name,
      description,
      trainer,
      course_fee,
      schedule,
      category,
      course_image,
      course_video_url,
      course_notes_url,
      course_assignment_url,
      id,
    ];
    const [results] = await db.query(sql, values);
    console.log(results);
    return results.affectedRows > 0;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteCourse = async (id) => {
  try {
    const sql = "DELETE FROM courses WHERE course_id = ?";
    const [result] = await db.query(sql, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error(error.message);
  }
};
