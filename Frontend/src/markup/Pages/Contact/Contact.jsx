import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Contact</h1>
                <p className="mb-0">
                  Have Any Further Questions? <br />
                  Let's Get in Touch!
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
              <li className="current">Contact</li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="contact" className="contact section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div
                className="info-item d-flex mt-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Wschodu Slonca, Warsaw, Poland</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+251-9-55-28-1000</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@yeneta.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
