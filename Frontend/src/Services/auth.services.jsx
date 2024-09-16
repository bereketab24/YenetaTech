import axios from "axios";

export const register = async (formdata) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/register",
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
      "http://localhost:3000/auth/login",
      formdata
    );
    return response.data; // Contains user data and token/session info
    console.log(formdata);
  } catch (error) {
    throw new Error(error.response.data.message || "Registration failed");
  }
};
