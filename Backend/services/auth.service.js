// services/authService.js
const bcrypt = require("bcrypt");
const db = require("../config/database");





// exports.register = async ({ username, email, password, roleId }) => {
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const sql = `INSERT INTO users (username, email, password, role_id) VALUES (?, ?, ?, ?)`;
//     const values = [username, email, hashedPassword, roleId];

//     return new Promise((resolve, reject) => {
//       db.query(sql, values, (err, result) => {
//         if (err) {
//           console.error("Error during registration:", err.message); // Debugging line
//           return reject(err);
//         }
//         console.log("Query result:", result);
//         resolve({ id: result.insertId, username, email, roleId });
//       });
//     });
//   } catch (error) {
//     console.error("Error in register service:", error.message); // Debugging line
//     throw new Error("Registration failed");
//   }
// };

// authServices.js

// authServices.js
// authServices.js

// exports.register = async (userData) => {
  
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const sql =
//     "INSERT INTO users (username, email, password, role_id) VALUES (?, ?, ?, ?)";

//   return new Promise((resolve, reject) => {
//     db.query(
//       sql,
//       [username, email, hashedPassword, studentRoleId],
//       (err, result) => {
//         if (err) return reject(err);
//         resolve({
//           id: result.insertId,
//           username,
//           email,
//           roleId: studentRoleId,
//         });
//       }
//     );
//   });
// };


exports.register = async (userData) => {
    try {
      const { fullname, username, email, password } = userData;

      // Fetch the role_id for "student"
      const [roleResult] = await db.query(
        "SELECT role_id FROM roles WHERE role_name = 'student'"
      );
      const studentRoleId = roleResult[0].role_id;

        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = `INSERT INTO users (fullname, username, email, password, role_id) VALUES (?, ?, ?, ?,?)`;
        const values = [fullname ,username, email, hashedPassword, studentRoleId];

        const [result] = await db.query(sql, values);
        return { id: result.insertId, username, email, roleId: studentRoleId };
    } catch (error) {
        console.error("Error during registration:", error.message);  // Debugging line
        throw new Error('Registration failed: ' + error.message);
    }
};

// exports.register = async (userData) => {
//   const { username, email, password, roleId } = userData;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const sql =
//     "INSERT INTO users (username, email, password, role_id) VALUES (?, ?, ?, ?)";
//   const values = [username, email, hashedPassword, roleId];

//   return new Promise((resolve, reject) => {
//     db.query(sql, values, (err, result) => {
//       if (err) return reject(err);
//       resolve({ id: result.insertId, username, email, roleId });
//     });
//   });
// };

// exports.register = async () => {
//     try {
//         const [result] = await db.query(`SELECT 1`);
//         return result;
//     } catch (error) {
//         throw new Error('Database query failed: ' + error.message);
//     }
// };


// exports.register = async () => {
//     return new Promise((resolve, reject) => {
//         db.query(`SELECT 1`, (err, result) => {
//             if (err) return reject(err);
//             resolve(result);
//         });
//     });
// };





exports.login = async (loginData) => {
  const { email, password } = loginData;
  const sql = "SELECT * FROM users WHERE email = ?";
  try {
    const [result] = await db.query(sql, [email]);
    if (result.length === 0){
      throw new Error("User not found")
    }
    const user = result[0]
    const match = await bcrypt.compare(password, user.password)
    if (!match){
      throw new Error("Invalid Password")
    }
    return {user}
  } catch (error) {
    throw new Error("Error during login: " + error.message);
    
  }}
  
//   return 

//   return new Promise((resolve, reject) => {
//     db.query(sql, [email], async (err, results) => {
//       if (err) return reject(err);

//       if (results.length === 0) {
//         return reject(new Error("User not found"));
//       }

//       const user = results[0];
//       const match = await bcrypt.compare(password, user.password);

//       if (!match) {
//         return reject(new Error("Invalid password"));
//       }

//       resolve({ user });
//     });
//   });
// }
