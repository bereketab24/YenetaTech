import axios from "axios";
const backend_api = import.meta.env.VITE_BACKEND_API_URL;
console.log(backend_api);
export const fetchData = async () => {
  try {
    const response = await axios.get(`${backend_api}/courses`);
    // console.log(response.data);
    return response.data; // Contains user data and token/session info
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// Fetch single course details
export const fetchCourseDetails = async (courseId) => {
  try {
    const response = await axios.get(`${backend_api}/courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
};

export const getCoursesbyCourseId = async (courseId) => {
  try {
    const response = await axios.get(`${backend_api}/courses/${courseId}`, {withCredentials:true});
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
};

export const deletecourse = async (courseId) => {
  try {
    const response = await axios.delete(`${backend_api}/courses/${courseId}`, {
      withCredentials: true,
    });
    // console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export const updatecourse = async (courseId, courseData) => {
  try {
    // console.log(courseData)
    const response = await axios.put(
      `${backend_api}/courses/${courseId}`,
      courseData,
      { withCredentials: true }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error updating the course");
    throw error;
  }
};

export const addCourse = async (newCourseData) => {
  try {
    const response = axios.post(`${backend_api}/courses`, newCourseData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error adding the course");
    throw error;
  }
};
