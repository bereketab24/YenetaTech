import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import { getalluser, deleteuser } from "../../../../Services/admin.services";

const Userdata = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const GetAllUsers = async () => {
      try {
        const response = await getalluser();
        setUsers(response.data);
      } catch (error) {
        throw new Error();
      }
    };
    GetAllUsers();
  }, []);
  console.log(users);
  const handleDeleteUser = async (userId) => {
    try {
      await deleteuser(userId);
      alert("User deleted successfully");
      setUsers(users.filter((user) => user.user_id !== userId));
    } catch (error) {
      alert("Failed to delete user");
    }
  };
  const columns = [
    { field: "user_id", headerName: "User_ID", width: 150 },
    { field: "role_id", headerName: "Role_ID", width: 150 },
    { field: "fullname", headerName: "Name", width: 350 },
    { field: "email", headerName: "Email", width: 350 },
    {
      field: "actions",
      headerName: "Action",
      width: 550,
      renderCell: (params) => (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDeleteUser(params.row.user_id)}
            >
              Delete
            </Button>
          </Box>
        </>
      ),
    },
  ];

  return (
    <div className={`${adminstyle.body} ${adminstyle.hpro}`}>
      <div className={`${adminstyle.body} ${adminstyle.wrapping}`}>
        <main id="main" className={`${adminstyle.main}`}>
          <div className={`${adminstyle.pagetitle}`}>
            <h1>Users</h1>
            <nav>
              <ol className={`breadcrumb`}>
                <li className="breadcrumb-item">
                  <a className={`${adminstyle.a}`} href="index.html">
                    Home
                  </a>
                </li>
                <li className={`breadcrumb-item active`}>Users</li>
              </ol>
            </nav>
          </div>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              checkboxSelection
              disableSelectionOnClick
              getRowId={(row) => row.user_id}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Userdata;
