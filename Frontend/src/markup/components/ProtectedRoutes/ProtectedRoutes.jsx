import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { RouteProtection } from "../../../Services/auth.services";

const ProtectedRoutes = ({ reqiredRole }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { isAuthenticated, userRole } = await RouteProtection();
        setIsAuthenticated(isAuthenticated);
        setUserRole(userRole);
      } catch (error) {
        console.error("Error checking session:", error);
      }
    };
    checkSession();
  }, []);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (reqiredRole && userRole !== reqiredRole) {
    return <Navigate to="/unauthorized" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
