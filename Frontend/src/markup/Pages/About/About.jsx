import React from "react";
import { Link } from "react-router-dom";
import about2 from "../../../assets/images/about2.jpg"

function About() {
  return (
    <main className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>
                  About Us
                  <br />
                </h1>
                <p className="mb-0">
                  We are team of talented software developers making an impact
                  on our country's journey towards digitalized
                  <strong> Ethiopia</strong>
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
              <li className="current">
                About Us
                <br />
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="about-us" className="section about-us">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-1 order-lg-2"
            >
              <img src={about2} className="img-fluid" alt="" />
            </div>

            <div
              className="col-lg-6 order-2 order-lg-1 content"
            >
              <h3>Who Are We?</h3>
              <p className="fst-italic">
                We are talented developers dedicated to spread digital literacy
                in our country.
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
