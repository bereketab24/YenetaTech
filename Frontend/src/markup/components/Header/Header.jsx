import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logoYc.png";


function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <>
      <header
        id="header"
        className={
          scrolled
            ? "header shadow d-flex align-items-center sticky-top"
            : "header d-flex align-items-center sticky-top"
        }
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <NavLink to="/" className={`logo d-flex align-items-center me-auto`}>
            <img src={logo} alt="" />
            <h1 className="sitename">Yeneta</h1>
          </NavLink>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Courses
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Contact
                  <br />
                </NavLink>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <Link className="btn-getstarted" to="/login">
            Log in
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
