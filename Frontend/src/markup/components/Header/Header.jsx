import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logoYc.png";
import { Dropdown } from "react-bootstrap";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
                <NavLink to="/" className="nav-item">
                  Home
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-item">
                  About
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="nav-item">
                  Courses
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-item">
                  Contact
                  <br />
                </NavLink>
              </li>
            </ul>
            {/* Toggle button for mobile view */}
            <Dropdown
              show={isDropdownOpen}
              onToggle={handleToggle}
              className="d-xl-none"
            >
              <Dropdown.Toggle
                id="dropdown-basic"
                className="mobile-nav-toggle"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/" className="dropdown-item">
                  Home
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/about"
                  className="dropdown-item"
                >
                  About
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/courses"
                  className="dropdown-item"
                >
                  Courses
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/contact"
                  className="dropdown-item"
                >
                  Contact
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
