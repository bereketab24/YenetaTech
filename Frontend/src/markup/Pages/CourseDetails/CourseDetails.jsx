import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCourseDetails  } from "../../../Services/course.services";

  const CourseDetails = () => {
    const { courseId } = useParams(); // Get courseId from URL parameters
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getCourseDetails = async () => {
        try {
          const data = await fetchCourseDetails(courseId);
          setCourse(data);
        } catch (err) {
          setError('Error fetching course details');
        } finally {
          setLoading(false);
        }
      };
  
      getCourseDetails();
    }, [courseId]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  return (
    <div>
      <main className="main">
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>{course.course_name}</h1>
                  <p className="mb-0">
                    {course.description}
                    {/* Master the art of full-stack web development with our
                    comprehensive MERN Stack online course! */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">{course.course_name}</li>
              </ol>
            </div>
          </nav>
        </div>
        <section
          id="courses-course-details"
          className="courses-course-details section"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <img src={course.course_image} className="img-fluid" alt="" />
                <h3>{course.course_name}</h3>
                <p>
                  {course.course_description}
                </p>
                <section id="about" className="about section">
                  <div className="container">
                    <div className="row gy-4">
                      <div className="col-lg-12 order-2 order-lg-1 content">
                        <h4>Key features:</h4>
                        <ul>
                          <li>
                            <i className="bi bi-check-circle"></i>
                            <span>
                              <strong>
                                Comprehensive Amharic curriculum:{" "}
                              </strong>
                              Learn MERN Stack concepts and best practices in
                              Amharic.
                            </span>
                          </li>
                          <li>
                            <i className="bi bi-check-circle"></i>
                            <span>
                              <strong>Hands-on projects: </strong>Build
                              real-world applications from scratch to solidify
                              your understanding.
                            </span>
                          </li>
                          <li>
                            <i className="bi bi-check-circle"></i>
                            <span>
                              {" "}
                              <strong>Expert Amharic instructors: </strong>
                              Benefit from the guidance of experienced
                              Amharic-speaking MERN Stack developers.
                            </span>
                          </li>
                          <li>
                            <i className="bi bi-check-circle"></i>
                            <span>
                              <strong>Flexible learning: </strong>Study at your
                              own pace with on-demand video lessons and
                              interactive exercises.
                            </span>
                          </li>
                          <li>
                            <i className="bi bi-check-circle"></i>
                            <span>
                              <strong>Career-oriented: </strong>Gain the skills
                              and knowledge needed to land a job as a MERN Stack
                              developer all over the globe.
                            </span>
                          </li>
                        </ul>
                        <p>
                          <b>
                            Enroll today and embark on a rewarding journey into
                            full-stack web development in Amharic, absolutely
                            free!
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-5">
                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Trainer</h5>
                  <p>
                    <b>{course.trainer}</b>
                  </p>
                </div>

                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Course Fee</h5>
                  <p>{course.course_fee}</p>
                </div>
                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Schedule</h5>
                  <p>{course.schedule}</p>
                </div>
                <div className="pricing">
                  <div className="btn-wrap">
                    <Link to="/enroll" className="btn-buy">
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CourseDetails;
