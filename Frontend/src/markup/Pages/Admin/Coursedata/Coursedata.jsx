import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal, TextField } from "@mui/material";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import {
  fetchData,
  deletecourse,
  updatecourse,
  addCourse,
} from "../../../../Services/course.services";
import AddCourseModal from "./AddCourseModal";

const Coursedata = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
      await deletecourse(courseId);
      alert("Course deleted successfully");
      setCourses(courses.filter((course) => course.course_id !== courseId));
    } catch (error) {
      alert("Failed to delete Course");
    }
  };
  const handleUpdateClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  const handleAddCourse = async (newCourseData) => {
    try {
      await addCourse(newCourseData);
      const updatedCourses = await fetchData();
      setCourses(updatedCourses);
      alert("Course added successfully");
    } catch (error) {
      alert("Failed to add course");
    }
  };
  const handleUpdateCourse = async () => {
    try {
      await updatecourse(selectedCourse.course_id, selectedCourse);
      alert("Course Successfully Updated!");
      const updatedCourses = await fetchData(); // Re-fetch all courses
      setCourses(updatedCourses);
      console.log(courses);
      handleModalClose();
    } catch (error) {
      alert("Sorry, failed to update the course!");
    }
  };
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxHeight: "80vh", // Set max height to allow scrolling within modal
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflowY: "auto", // Enable vertical scrolling
  };
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
    {
      field: "course_assignment_url",
      headerName: "Course Assignment Link",
      width: 350,
    },
    { field: "created_at", headerName: "Date of Uploaded", width: 350 },
    { field: "updated_at", headerName: "Date of Updated", width: 350 },

    {
      field: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <>
          <Box
            sx={{
              display: "width",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleUpdateClick(params.row)}
              style={{ marginRight: "8px" }}
            >
              Update
            </Button>
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
            <Button
              style={{marginBottom: 5}}
              variant="contained"
              color="primary"
              onClick={() => setIsAddModalOpen(true)}
            >
              Add Course
            </Button>

            <DataGrid
              rows={courses}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              checkboxSelection
              disableSelectionOnClick
              getRowId={(row) => row?.course_id ?? ""}
            />
          </div>
          <Modal open={isModalOpen} onClose={handleModalClose}>
            <Box sx={modalStyle}>
              <h2>Update Course</h2>
              <TextField
                label="Course Name"
                value={selectedCourse?.course_name || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    course_name: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Description"
                value={selectedCourse?.description || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    description: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Trainer Name"
                value={selectedCourse?.trainer || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    trainer: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Fee"
                value={selectedCourse?.course_fee || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    course_fee: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Schedule"
                value={selectedCourse?.schedule || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    schedule: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Category"
                value={selectedCourse?.category || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    category: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Image URL"
                value={selectedCourse?.course_image || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    course_image: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Video URL"
                value={selectedCourse?.course_video_url || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    course_video_url: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Notes URL"
                value={selectedCourse?.course_notes_url || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    course_notes_url: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Assignments URL"
                value={selectedCourse?.course_assignment_url || ""}
                onChange={(e) =>
                  setSelectedCourse({
                    ...selectedCourse,
                    course_assignment_url: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              {/* Add other fields here similarly */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateCourse}
                fullWidth
              >
                Save Changes
              </Button>
            </Box>
          </Modal>
          <AddCourseModal             isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            onAdd={handleAddCourse}/>
        </main>
      </div>
    </div>
  );
};

export default Coursedata;
