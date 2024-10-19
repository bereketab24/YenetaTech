import React ,{useState, useEffect} from "react";
import {Navigate, Outlet} from "react-router-dom"
import axios from "axios"

const ProtectedRoutes = ({reqiredRole}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [userRole, setUserRole] = useState(null)

    useEffect(,[])
  return ;
}

export default ProtectedRoutes;
