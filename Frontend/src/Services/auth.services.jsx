import axios from "axios";

export const register = async (formdata) => {
  try {
    const response = await axios.post("/register", credentials);
    return response.data; // Contains user data and token/session info
  } catch (error) {
    throw new Error(error.response.data.message || "Registration failed");
  }
};
