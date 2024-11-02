import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

const AddCourseModal = ({ isOpen, onClose, onAdd }) => {
  const [courseData, setCourseData] = useState({
    course_name: "",
    description: "",
    trainer: "",
    course_fee: "",
    schedule: "",
    category: "",
    course_image: "",
    course_video_url: "",
    course_notes_url: "",
    course_assignment_url: "",
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    onAdd(courseData);
    onClose();
    setCourseData({
      course_name: "",
      description: "",
      trainer: "",
      course_fee: "",
      schedule: "",
      category: "",
      course_image: "",
      course_video_url: "",
      course_notes_url: "",
      course_assignment_url: "",
    });
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

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6">Add New Course</Typography>
        <TextField label="Course Name" name="course_name" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Description" name="description" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Trainer" name="trainer" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Course Fee" name="course_fee" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Schedule" name="schedule" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Category" name="category" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Course Image Link" name="course_image" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Course Video Link" name="course_video_url" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Course Notes Link" name="course_notes_url" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Course Assignment Link" name="course_assignment_url" fullWidth margin="normal" onChange={handleChange} />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add Course
        </Button>
      </Box>
    </Modal>
  );
};

export default AddCourseModal;
