import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import { fetchData , deletecourse } from "../../../../Services/course.services";

const Coursedata = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const GetAllCourses = async () => {
      try {
        const response = await fetchData();
        console.log(response)
        setCourses(response);
      } catch (error) {
        throw new Error();
      }
    };
    GetAllCourses();
  }, []);
  console.log(courses);
  const handleDeleteCourse = async (courseId) => {
    try {
        await deletecourse(courseId)
        alert("Course deleted successfully")
        setCourses(courses.filter((course)=> course.course_id !== courseId))
        
    } catch (error) {
        alert("Failed to delete Course");
        
    }
  }
  const columns = [
    { field: "course_id", headerName: "Course_ID", flex: 0.2 },
    { field: "course_name", headerName: "Course Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "trainer", headerName: "Trainer Name", flex: 0.5 },
    { field: "course_fee", headerName: "Fee", flex: 0.4 },
    { field: "schedule", headerName: "Schedule", flex: 0.5 },
    { field: "category", headerName: "Category", flex: 0.5 },
    { field: "course_image", headerName: "Course Image Link", flex: 0.5 },
    { field: "course_video_url", headerName: "Course Video Link", flex: 0.5 },
    { field: "course_notes_url", headerName: "Course Notes Link", flex: 0.5 },
    { field: "course_assignment_url", headerName: "Course Assignment Link", flex: 0.5 },
    { field: "created_at", headerName: "Date of Uploaded", flex: 0.5 },
    { field: "updated_at", headerName: "Date of Updated", flex: 0.5 },

    {
      field: "actions",
      headerName: "Action",
      flex: 0.5,
      renderCell: (params) => (
        <>
          <Box
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
          >
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDeleteCourse(params.row.course_id)}
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
      <body className={`${adminstyle.body} ${adminstyle.wrapping}`}>
        <main id="main" className={`${adminstyle.main}`}>
          <div className={`${adminstyle.pagetitle}`}>
            <h1>Courses</h1>
            <nav>
              <ol className={`breadcrumb`}>
                <li className="breadcrumb-item">
                  <a className={`${adminstyle.a}`} href="index.html">
                    Home
                  </a>
                </li>
                <li className={`breadcrumb-item active`}>Courses</li>
              </ol>
            </nav>
          </div>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={courses}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              checkboxSelection
              disableSelectionOnClick
              getRowId={(row) => row.course_id}
            />
          </div>
        </main>
      </body>
    </div>
  );
};

export default Coursedata;
