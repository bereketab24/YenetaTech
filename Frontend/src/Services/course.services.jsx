import axios from "axios";
const backend_api = import.meta.env.VITE_BACKEND_API_URL;
console.log(backend_api);
export const fetchData = async () => {
  try {
    const response = await axios.get(`${backend_api}/courses`);
    console.log(response.data);
    return response.data; // Contains user data and token/session info
  } catch (error) {
    throw new Error(error.response.data.message || "Registration failed");
  }
};