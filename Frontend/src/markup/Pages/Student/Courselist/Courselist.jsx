import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { enroll } from "../../../../Services/enrollment.services";
import { fetchData } from "../../../../Services/course.services";
import adminstyle from "../../../../assets/styles/user/user.module.css";

function Courselist() {
  const [courses, setCourses] = useState([]);
  const [serverError, setServerError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataFromService = async () => {
      try {
        const fetchedData = await fetchData();
        setCourses(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromService();
  }, []);

  const handleenroll = async (courseId) => {
    try {
      const response = await enroll(courseId);

      if (response) {
        alert("enrolled successfully");
        navigate("/student");
      }
    } catch (error) {
      // alert("Failed to enroll");
      // console.log(error.message)
      setServerError(() => ({
        [courseId] : error.message
      }));

      console.log(serverError)
    }
  };

  return (
    <main id="main" className={`${adminstyle.main}`}>
      <div className={`${adminstyle.pagetitle}`}>
        <h1>Courses</h1>
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
                          <Link to={`/courses/${course.course_id}`}>
                            {course.course_name}
                          </Link>
                        </h3>
                        <p className="description">
                          {course.description}
                          {"  "}
                          <strong>No Prior Knowledge Required!</strong>
                        </p>
                        <div className="pricing">
                          {course.course_fee}
                          <div className="btn-wrap">
                            <button
                              onClick={() => handleenroll(course.course_id)}
                              style={{ border: 0 }}
                              className="btn-buy"
                            >
                              Enroll
                            </button>
                            {serverError[course.course_id] && (
                              <div className="alert alert-danger mt-2" role="alert" >
                                {serverError[course.course_id]}
                              </div>
                            )}
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
