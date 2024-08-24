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

exports.getCourseById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM courses WHERE id = ?";
    db.query(sql, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

exports.addCourse = (courseData) => {
  //  console.log("Starting to add course");
   const {
     course_name,
     description,
     course_video_url,
     course_notes_url,
     course_assignment_url,
   } = courseData;
  const sql = `
        INSERT INTO courses (course_name, description, course_video_url, course_notes_url, course_assignment_url)
        VALUES (?, ?, ?, ?, ?)
    `;
  const values = [
    course_name,
    description,
    course_video_url,
    course_notes_url,
    course_assignment_url,
  ];
  // console.log("Executing query");

  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve({ id: result.insertId, ...courseData });
    });
  });
};

exports.updateCourse = (id, courseData) => {
  const { title, description, videoUrl, notesUrl, assignmentUrl } = courseData;

  const sql =
    "UPDATE courses SET title = ?, description = ?, course_video_url = ?, course_notes_url = ?, course_assignment_url = ? WHERE id = ?";
  const values = [title, description, videoUrl, notesUrl, assignmentUrl, id];

  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};

exports.deleteCourse = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM courses WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};
