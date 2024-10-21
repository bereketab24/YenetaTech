import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { RouteProtection } from "../../../Services/auth.services";

const ProtectedRoutes = ({ reqiredRole }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { isAuthenticated, roleId } = await RouteProtection();
        console.log(isAuthenticated)
        const mama = await RouteProtection();
        console.log(mama)
        setIsAuthenticated(isAuthenticated);
        setUserRole(roleId);
      } catch (error) {
        console.error("Error checking session:", error);
      }
    };
    checkSession();
  }, []);
  if (isAuthenticated === undefined) {
    return <div>Loading...</div>; // While the session check is in progress
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (reqiredRole && userRole !== reqiredRole) {
    return <Navigate to="/unauthorized" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
