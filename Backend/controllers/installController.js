// controllers/installController.js

const db = require("../config/database");

exports.install = async (req, res) => {
  try {
    // await db.query(`USE learning_platform`);

    // Create roles table
    await db.query(`
            CREATE TABLE IF NOT EXISTS roles (
                role_id INT AUTO_INCREMENT PRIMARY KEY,
                role_name VARCHAR(50) NOT NULL UNIQUE
            );

        `);

    // Create users table
    await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                user_id INT AUTO_INCREMENT PRIMARY KEY,
                fullname VARCHAR(100) NOT NULL,
                username VARCHAR(100) NOT NULL UNIQUE,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role_id INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (role_id) REFERENCES roles(role_id)
            );
        `);

    // Create courses table
    await db.query(`
            CREATE TABLE IF NOT EXISTS courses (
                course_id INT AUTO_INCREMENT PRIMARY KEY,
                course_name VARCHAR(255) NOT NULL UNIQUE,
                description TEXT,
                course_video_url VARCHAR(255),
                course_notes_url VARCHAR(255),
                course_assignment_url VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );

        `);

    // Create student_courses table (to track enrollments)
    await db.query(`
            CREATE TABLE IF NOT EXISTS enrollments (
                enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                course_id INT,
                enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(user_id),
                FOREIGN KEY (course_id) REFERENCES courses(course_id)
            );
        `);


    await db.query(`
            CREATE TABLE IF NOT EXISTS progress (
                progress_id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                course_id INT,
                video_progress INT DEFAULT 0,
                assignment_status ENUM('not submitted', 'submitted', 'graded') DEFAULT 'not submitted',
                graded_at TIMESTAMP NULL,
                FOREIGN KEY (user_id) REFERENCES users(user_id),
                FOREIGN KEY (course_id) REFERENCES courses(course_id)
            );
        `);

    await db.query(`
            CREATE TABLE IF NOT EXISTS assignments (
                assignment_id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                course_id INT,
                submission TEXT,
                submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                grade VARCHAR(10) NULL,
                FOREIGN KEY (user_id) REFERENCES users(user_id),
                FOREIGN KEY (course_id) REFERENCES courses(course_id)
            );
        `);

    // Insert default roles
    await db.query(
      `INSERT IGNORE INTO roles (role_name) VALUES ('admin'), ('student');`
    );

    res
      .status(200)
      .json({ message: "Database and tables created successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error setting up the database", error: err.message });
  }
};
