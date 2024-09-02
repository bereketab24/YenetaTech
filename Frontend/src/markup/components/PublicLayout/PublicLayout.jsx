// src/markup/components/PublicLayout/PublicLayout.jsx
import React from "react";
import Header from "../Header/Header.jsx"; // Public Header
import Footer from "../Footer/Footer.jsx"; // Public Footer
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renders the matched child route */}
      </main>
      <Footer />
    </>
  );
}

export default PublicLayout;
