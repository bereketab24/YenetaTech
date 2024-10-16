import React from "react";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import { Link, NavLink } from "react-router-dom";

function AdminSide({ isSidebarOpen }) {
  return (
    <>
      <aside id="sidebar" className={`${adminstyle.sidebar} ${isSidebarOpen ? '' : adminstyle.sidebarHidden}`}>
        <ul className={`${adminstyle.sidebarnav}`} id="sidebarnav">
          <li className={`${adminstyle.navitem}`}>
            <NavLink className={`${adminstyle.navlink}`} to="/admin">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className={`${adminstyle.navitem}`}>
            <NavLink className={`${adminstyle.navlink} ${adminstyle.collapsed}`} to="/admin/students">
              <i className="bi bi-people"></i>
              <span>Students</span>
            </NavLink>
          </li>

          <li className={`${adminstyle.navitem}`}>
            <NavLink className={`${adminstyle.navlink} ${adminstyle.collapsed}`} to="/admin/courses">
              <i className="bi bi-book-half"></i>
              <span>Courses</span>
              <i className="bi ms-auto"></i>
            </NavLink>
          </li>

          <li className={`${adminstyle.navitem}`}>
            <NavLink className={`${adminstyle.navlink} ${adminstyle.collapsed}`} to="/admin/progress">
              <i className="bi bi-bar-chart"></i>
              <span>Progress</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default AdminSide;
