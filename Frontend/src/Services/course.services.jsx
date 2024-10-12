import axios from "axios";
const backend_api = import.meta.env.VITE_BACKEND_API_URL;
console.log(backend_api);
export const fetchData = async () => {
  try {
    const response = await axios.get(`${backend_api}/courses`);
    console.log(response.data);
    return response.data; // Contains user data and token/session info
   } 
  //catch (error) {
  //   throw new Error(error.response.data.message || "Registration failed");
  // }
  catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// export const CourseById = async (course_id) => {
//     try {
//         const response = await axios.get(`${backend_api}/courses/${course_id}`)
//         console.log(response.data)
//         return response.data
//     } catch (error) {
//         throw new Error(error.response.data.message || "I can't find the course")
        
//     }
// }
// Fetch single course details
export const fetchCourseDetails = async (courseId) => {
  try {
    const response = await axios.get(`${backend_api}/courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching course details:', error);
    throw error;
  }
};