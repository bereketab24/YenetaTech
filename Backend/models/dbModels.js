// models/dbModels.js
const db = require("../config/database");

exports.createUser = (userData) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users SET ?";
    db.query(query, userData, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.findUserByEmail = async (email) => {
  try{
  const query = "SELECT * FROM users WHERE email = ?";
  const [result] = await db.query(query, [email])
  return result[0]
  }
  catch (error){
    return error
  }
}


exports.findCoursesByid = async (user_id, course_id) => {
  try{
  const query = "SELECT * FROM users WHERE user_id = ? AND course_id = ?";
  const [result] = await db.query(query, [user_id, course_id])
  return result.length > 0
  }
  catch (error){
    return error
  }
}
//   return new Promise((resolve, reject) => {
//     const query = "SELECT * FROM users WHERE email = ?";
//     db.query(query, [email], (err, results) => {
//       if (err) return reject(err);
//       else{
//         console.log("User found:", err);
//       }
      
//       resolve(results[0]);
//     });
//   });
// };

// More model methods like updateUser, deleteUser, etc.
