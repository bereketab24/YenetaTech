import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-6 footer-about">
              <Link to="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Yeneta</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>Addis Ababa, Ethiopia</p>
                <p className="mt-3">
                  <strong>Phone:</strong>{" "}
                  <Link to="tel:+251955281000" target="_blank">
                    +251-55-28-1000
                  </Link>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <Link to="mailto:info@yenetatech.com" target="_blank">
                    info@yenetatech.com
                  </Link>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <Link to="https://x.com/bereketab24" target="_blank">
                  <i className="bi bi-twitter-x"></i>
                </Link>
                <Link
                  to="https://www.reddit.com/user/Bereketab24/"
                  target="_blank"
                >
                  <i className="bi bi-reddit"></i>
                </Link>
                <Link
                  to="https://discord.com/users/1279696113632411650"
                  target="_blank"
                >
                  <i className="bi bi-discord"></i>
                </Link>
                <Link to="www.linkedin.com/in/bereketab24" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-5 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/" target="_blank">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" target="_blank">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/courses" target="_blank">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/term" target="_blank">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" target="_blank">
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Courses</h4>
              <ul>
                <li>
                  <Link to="/:courseID">Web Design</Link>
                </li>
                <li>
                  <Link to="/:CourseID">Web Development</Link>
                </li>
                <li>
                  <Link to="/:CourseID">Product Management</Link>
                </li>
                <li>
                  <Link to="/:CourseID">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/:CourseID">Graphic Design</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">Yeneta Tech</strong>
            <span>All Rights Reserved</span> <br />
            <span>
              Developed by <strong>Bereketab</strong>
            </span>
          </p>
          <div className="credits">
            Designed by{" "}
            <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
