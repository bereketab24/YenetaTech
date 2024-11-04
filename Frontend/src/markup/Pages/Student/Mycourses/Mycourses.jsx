import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { enrolled } from "../../../../Services/enrollment.services";
import adminstyle from "../../../../assets/styles/user/user.module.css";

function Courselist() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const enrolledcourse = async () => {
      try {
        const fetchedData = await enrolled();
        setCourses(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    enrolledcourse();
  }, []);
  return (
    <main id="main" className={`${adminstyle.main}`}>
      <div className={`${adminstyle.pagetitle}`}>
        <h1>Courses</h1>
        <nav>
          <ol className={`breadcrumb`}>
            <li className="breadcrumb-item">
              <a className={`${adminstyle.a}`} href="index.html">
                Student
              </a>
            </li>
            <li className={`breadcrumb-item active`}>Courses</li>
          </ol>
        </nav>
      </div>
      <section id="courses" className="courses section">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row">
                {courses.map((course) => (
                  <div
                    className="col-lg-4 col-md-6 align-items-center mb-5 mb-lg-3"
                    key={course.course_id}
                  >
                    <div className="course-item shadow">
                      <img
                        src={course.course_image}
                        className="img-fluid"
                        alt="Course Image"
                      />
                      <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="category">{course.category}</p>
                        </div>
                        <h3>
                            {course.course_name}
                        </h3>
                        <div className="pricing">
                          <div className="btn-wrap">
                            <Link to="/enroll" className="btn-buy">
                              Get in
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Courselist;
