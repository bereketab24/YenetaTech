import React from "react";

function Footer() {
  return (
    <>
      <footer id="footer" class="footer position-relative light-background">
        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-6 footer-about">
              <a href="index.html" class="logo d-flex align-items-center">
                <span class="sitename">Yeneta</span>
              </a>
              <div class="footer-contact pt-3">
                <p>Addis Ababa, Ethiopia</p>
                <p class="mt-3">
                  <strong>Phone:</strong> <span>+251955281000</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@yeneta.com</span>
                </p>
              </div>
              <div class="social-links d-flex mt-4">
                <a href="">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-5 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong class="px-1 sitename">Yeneta Tech</strong>
            <span>All Rights Reserved</span> <br />
            <span>
              Developed by <strong>Bereketab</strong>
            </span>
          </p>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <a
          href="#"
          id="scroll-top"
          class="scroll-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
      </footer>
    </>
  );
}

export default Footer;
