import axios from "axios";
import dotenv from "dotenv"

dotenv.config()
const backend_api = process.env.BACKEND_API_URL;
export const register = async (formdata) => {
  try {
    const response = await axios.post(
      `${backend_api}/auth/register`,
      formdata
    );
    console.log(response.data);
    return response.data; // Contains user data and token/session info
    
  } catch (error) {
    throw new Error(error.response.data.message || "Registration failed");
  }
};


export const login = async (formdata) => {
  try {
    const response = await axios.post(
      `${backend_api}/auth/login`,
      formdata
    );
    return response.data; // Contains user data and token/session info
    console.log(formdata);
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};
