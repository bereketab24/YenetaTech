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
      } catch (error) {}
    };
  }, []);
  return;
};

export default ProtectedRoutes;
