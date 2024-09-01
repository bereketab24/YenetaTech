import React from "react";
import mernpic from "../../../assets/images/MERN.jpg"
import {Link} from "react-router-dom"

function CourseDetails() {
  return (
    <main className="main">
      <div className="page-title">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>MERN stack</h1>
                <p className="mb-0">
                  Master the art of full-stack web development with our
                  comprehensive MERN Stack online course!
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
              <li className="current">MERN stack</li>
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
              <img src={mernpic} className="img-fluid" alt="" />
              <h3>MERN STACK</h3>
              <p>
                Learn to build dynamic, interactive web applications using
                MongoDB, Express.js, React, and Node.js.
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
                            <strong>Comprehensive Amharic curriculum: </strong>
                            Learn MERN Stack concepts and best practices in
                            Amharic.
                          </span>
                        </li>
                        <li>
                          <i className="bi bi-check-circle"></i>
                          <span>
                            <strong>Hands-on projects: </strong>Build real-world
                            applications from scratch to solidify your
                            understanding.
                          </span>
                        </li>
                        <li>
                          <i className="bi bi-check-circle"></i>
                          <span>
                            {" "}
                            <strong>Expert Amharic instructors: </strong>Benefit
                            from the guidance of experienced Amharic-speaking
                            MERN Stack developers.
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
                  <b>Bereketab</b>
                </p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Course Fee</h5>
                <p>free</p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Schedule("optional" live className)</h5>
                <p>6.00 pm - 8.00 pm</p>
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
  );
}

export default CourseDetails;
