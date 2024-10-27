import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { getalluser } from "../../../../Services/admin.services";

const Userdata = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const GetAllUsers = async () => {
      try {
        const response = await getalluser();
        setUser(response)
      } catch (error) {
        throw new Error();
      }
    };
    GetAllUsers();
  }, []);
};

export default Userdata
