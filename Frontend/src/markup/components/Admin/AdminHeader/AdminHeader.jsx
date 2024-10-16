import React from "react";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import adlogo from "../../../../assets/images/logoYc.png";
import profile from "../../../../assets/images/profile.jpg";
import { Link } from "react-router-dom";

function AdminHeader({ toggleSidebar }) {
  return (
    <>
      <header id="header" className={`${adminstyle.header} fixed-top d-flex align-items-center mb-5`}>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className={`${adminstyle.logo} d-flex align-items-center`}>
            <img src={adlogo} alt="" />
            <span className="d-none d-lg-block">Yeneta</span>
          </Link>
          <i 
            className={`bi bi-list ${adminstyle.togglesidebarbtn}`} 
            onClick={toggleSidebar} // Add onClick event
          ></i>
        </div>

        <nav className={`${adminstyle.headernav} ms-auto`}>
          <ul className="d-flex align-items-center">
            <li className={`${adminstyle.navitem} dropdown pe-3`}>
              <a
                className={`${adminstyle.navlink} ${adminstyle.navprofile} d-flex align-items-center pe-0 pt-2`}
                href="#"
              >
                <img src={profile} alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  @Bereketab24
                </span>
              </a>

              <ul className={`dropdown-menu dropdown-menu-end ${adminstyle.dropdownmenuarrow} ${adminstyle.profile}`}>
                <li className="dropdown-header">
                  <h6>Bereketab Haileeyesus</h6>
                  <span>Software Developer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default AdminHeader;
