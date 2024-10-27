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
        setUser(response.data)
      } catch (error) {
        throw new Error();
      }
    };
    GetAllUsers();
  }, []);
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row.id)}
            style={{ marginRight: 16 }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      )
    }
  ];
};

export default Userdata
