// src/markup/components/AdminLayout/AdminLayout.jsx
import React from "react";
import AdminHeader from "../Admin/AdminHeader/AdminHeader.jsx"; // Admin Header
import AdminFooter from "../Admin/AdminFooter/AdminFooter.jsx"; // Admin Footer
import AdminSide from "../Admin/AdminSide/AdminSide.jsx";
import { Outlet } from "react-router-dom";
import "../../../assets/styles/user/user.module.css"

function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <AdminSide/>
      <main>
        <Outlet /> {/* Renders the matched child route */}
      </main>
      <AdminFooter />
    </>
  );
}

export default AdminLayout;
