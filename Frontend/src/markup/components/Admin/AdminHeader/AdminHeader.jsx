import React from "react";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import adlogo from "../../../../assets/images/logoYc.png";
import profile from "../../../../assets/images/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../../Services/auth.services";
import { colors } from "@mui/material";

function AdminHeader({ toggleSidebar }) {
  const navigate = useNavigate()
  const logoutHandler = async () => {
    try {
     const response = await logout()
     console.log(response)
     if (response === 200){
      navigate("/")
     }
    } catch (error) {
      return error
    }
  }
  return (
    <>
      <header
        id="header"
        className={`${adminstyle.header} fixed-top d-flex align-items-center mb-5`}
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link
            to="/admin"
            className={`${adminstyle.logo} d-flex align-items-center`}
          >
            <img src={adlogo} alt="" />
            <span className="d-none d-lg-block">Yeneta</span>
          </Link>
          <i
            className={`bi bi-list ${adminstyle.togglesidebarbtn}`}
            onClick={toggleSidebar} // Add onClick event
          ></i>
        </div>

        <nav className={`${adminstyle.headernav} ms-auto`}>
          <button
            type="button"
            className="btn "
            style={{ backgroundColor: "#57abcd", color: "white" }}
            onClick={() => logoutHandler()}
          >
            Log out
          </button>
        </nav>
      </header>
    </>
  );
}

export default AdminHeader;
