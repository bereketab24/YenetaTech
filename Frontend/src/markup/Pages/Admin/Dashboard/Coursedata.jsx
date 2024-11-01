import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal, TextField } from "@mui/material";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import { fetchData , deletecourse } from "../../../../Services/course.services";

const Coursedata = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const GetAllCourses = async () => {
      try {
        const response = await fetchData();
        // console.log(response)
        setCourses(response);
      } catch (error) {
        throw new Error();
      }
    };
    GetAllCourses();
  }, []);
//   console.log(courses);
  const handleDeleteCourse = async (courseId) => {
    try {
        await deletecourse(courseId)
        alert("Course deleted successfully")
        setCourses(courses.filter((course)=> course.course_id !== courseId))
        
    } catch (error) {
        alert("Failed to delete Course");
        
    }
  }
  const handleUpdateClick = (course) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }
  const handleModalClosed = () => {
    setSelectedCourse(null)
    setIsModalOpen(false)
  }
  const handleUpdateCourse = async () => {
    try {
        
        
    } catch (error) {
        
    }
  }
  const columns = [
    { field: "course_id", headerName: "ID", width: 50 },
    { field: "course_name", headerName: "Name", width: 350 },
    { field: "description", headerName: "Description", width: 350 },
    { field: "trainer", headerName: "Trainer Name", width: 350 },
    { field: "course_fee", headerName: "Fee", width: 350 },
    { field: "schedule", headerName: "Schedule", width: 350 },
    { field: "category", headerName: "Category", width: 350 },
    { field: "course_image", headerName: "Course Image Link", width: 350 },
    { field: "course_video_url", headerName: "Course Video Link", width: 350 },
    { field: "course_notes_url", headerName: "Course Notes Link", width: 350 },
    { field: "course_assignment_url", headerName: "Course Assignment Link", width: 350 },
    { field: "created_at", headerName: "Date of Uploaded", width: 350 },
    { field: "updated_at", headerName: "Date of Updated", width: 350 },

    {
      field: "actions",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <>
          <Box
            sx={{ display: "width", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
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
      <div className={`${adminstyle.body} ${adminstyle.wrapping}`}>
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
      </div>
    </div>
  );
};

export default Coursedata;
