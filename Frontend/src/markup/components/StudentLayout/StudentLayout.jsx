// src/markup/components/AdminLayout/AdminLayout.jsx
import React, {useState} from "react";
import AdminHeader from "../Admin/AdminHeader/AdminHeader.jsx"; // Admin Header
import AdminFooter from "../Admin/AdminFooter/AdminFooter.jsx"; // Admin Footer
import AdminSide from "../Admin/AdminSide/AdminSide.jsx";
import { Outlet } from "react-router-dom";
import "../../../assets/styles/user/user.module.css"

function StudentLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <AdminHeader toggleSidebar={toggleSidebar}/>
      <AdminSide isSidebarOpen={isSidebarOpen}/>
      <main style={{ marginLeft: isSidebarOpen ? '250px' : '0' }}>
        <Outlet /> {/* Renders the matched child route */}
      </main>
      <AdminFooter />
    </>
  );
}

export default StudentLayout;


