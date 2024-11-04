import axios from "axios";
const backend_api = import.meta.env.VITE_BACKEND_API_URL;
console.log(backend_api);
export const enroll = async (courseId) => {
  try {
    const response = await axios.post(`${backend_api}/enrollments/enroll/${courseId}`, {
        withCredentials: true,
      });
    // console.log(response.data);
    return response.data; // Contains user data and token/session info
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// Fetch single course details
export const unenroll = async (courseId) => {
  try {
    const response = await axios.delete(`${backend_api}/enrollments/unenroll/${courseId}`, {
        withCredentials: true,
      });
    return response.data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
};

export const enrolled = async () => {
  try {
    const response = await axios.get(`${backend_api}/enrollments`, {
      withCredentials: true,
    });
    // console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

