import React from "react";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import { NavLink } from "react-router-dom";

function StudentSide({ isSidebarOpen }) {
  return (
    <>
      <aside id="sidebar" className={`${adminstyle.sidebar} ${isSidebarOpen ? '' : adminstyle.sidebarHidden}`}>
        <ul className={`${adminstyle.sidebarnav}`} id="sidebarnav">
          <li className={`${adminstyle.navitem}`}>
            <NavLink className={`${adminstyle.navlink} ${adminstyle.collapsed}`} to="/student">
              <i className="bi bi-grid"></i>
              <span>Courses</span>
            </NavLink>
          </li>

          
          {/* ${adminstyle.collapsed} */}
          <li className={`${adminstyle.navitem}`}>
            <NavLink className={`${adminstyle.navlink} ${adminstyle.collapsed}`} to="/student/mycourses">
              <i className="bi bi-book-half"></i>
              <span>My Courses</span>
              <i className="bi ms-auto"></i>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default StudentSide;
