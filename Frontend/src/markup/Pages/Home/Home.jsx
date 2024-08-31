import React from 'react'
import banner1 from "../../../assets/images/hero-bg.jpg"
import about1 from "../../../assets/images/about1.jpg";
import course1 from "../../../assets/images/course-1.jpg";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img src={banner1} alt="" data-aos="fade-in" />

          <div className="container">
            <h2 data-aos="fade-up" data-aos-delay="100">
              From Ethiopians,
              <br />
              To Ethiopians
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              We are team of talented software developers making an impact on
              our country's journey towards digitalized{" "}
              <strong>Ethiopia</strong>
            </p>
            <div
              className="d-flex mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/register" className="btn-get-started">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={about1} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-6 order-2 order-lg-1 content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>About Us</h3>
                <p className="fst-italic">
                  We are talented developers dedicated to spread digital
                  literacy in our country.
                  <br />
                  <br />
                  Our Objectives:
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Preparing our people for the upcoming digitalized world.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>Reducing the language barrier in the industry.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Making our youth competent in the tech job market.
                    </span>
                  </li>
                </ul>
                <a href="about.html" className="read-more">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="courses section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Courses</h2>
            <p>Popular Courses</p>
          </div>

          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-center mb-3 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="course-item shadow">
                  <img src={course1} className="img-fluid" alt="..." />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Full-Stack Web Development</p>
                    </div>

                    <h3>
                      <a href="course-details.html">MERN Stack</a>
                    </h3>
                    <p className="description">
                      Full-Stack (MERN) Web Development from scratch.
                      <strong>No Prior Knowledge Required!</strong>
                    </p>
                    <div className="pricing">
                      <div className="btn-wrap">
                        <a href="#" className="btn-buy">
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-center mb-3 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="course-item shadow">
                  <img src={course1} className="img-fluid" alt="..." />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Web Design</p>
                    </div>

                    <h3>
                      <a href="course-details.html">Figma</a>
                    </h3>
                    <p className="description">
                      Web design using Figma from scratch.
                      <strong>No Prior Knowledge Required!</strong>
                    </p>
                    <div className="pricing">
                      <div className="btn-wrap">
                        <a href="index.html" className="btn-buy">
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-center mb-3 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="course-item shadow">
                  <img src={course1} className="img-fluid" alt="..." />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Full-Stack Web Development</p>
                    </div>

                    <h3>
                      <a href="course-details.html">MERN Stack</a>
                    </h3>
                    <p className="description">
                      Full-Stack (MERN) Web Development from scratch.
                      <strong>No Prior Knowledge Required!</strong>
                    </p>
                    <div className="pricing">
                      <div className="btn-wrap">
                        <a href="#" className="btn-buy">
                          Enroll
                        </a>
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

export default Home
