import React from "react";
import { Link } from "react-router-dom";
import Courses from "../../components/Courses/Courses";

function Coursesp() {
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
              <Courses/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Coursesp;
