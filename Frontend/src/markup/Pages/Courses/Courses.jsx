import React from "react";
import { Link } from "react-router-dom";
import course1 from "../../../assets/images/course-1.jpg";

function Courses() {
  return (
    <>
      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Courses</h1>
                  <p className="mb-0">
                    We have comprehensive technological courses
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
                <li className="current">Courses</li>
              </ol>
            </div>
          </nav>
        </div>
        <section id="courses" className="courses section">
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 d-flex align-items-center mb-3 mb-lg-0">
                    <div className="course-item">
                      <img src={course1} className="img-fluid" alt="..." />
                      <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="category">Full-Stack Web Development</p>
                        </div>

                        <h3>
                          <Link to="/:courseID">MERN Stack</Link>
                        </h3>
                        <p className="description">
                          Full-Stack (MERN) Web Development from scratch.
                          <strong>No Prior Knowledge Required!</strong>
                        </p>
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
                  <div className="col-lg-4 col-md-6 d-flex align-items-center mb-3 mb-lg-0">
                    <div className="course-item">
                      <img src={course1} className="img-fluid" alt="..." />
                      <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="category">Web Design</p>
                        </div>

                        <h3>
                          <Link to="/courseID">Figma</Link>
                        </h3>
                        <p className="description">
                          Web design using Figma from scratch.
                          <strong>No Prior Knowledge Required!</strong>
                        </p>
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
                  <div className="col-lg-4 col-md-6 d-flex align-items-center mb-3 mb-lg-0">
                    <div className="course-item">
                      <img src={course1} className="img-fluid" alt="..." />
                      <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="category">Full-Stack Web Development</p>
                        </div>

                        <h3>
                          <Link to="/courseID">MERN Stack</Link>
                        </h3>
                        <p className="description">
                          Full-Stack (MERN) Web Development from scratch.
                          <strong>No Prior Knowledge Required!</strong>
                        </p>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Courses;
