import axios from "axios";
const backend_api = import.meta.env.VITE_BACKEND_API_URL;
console.log(backend_api);
export const register = async (formdata) => {
  try {
    const response = await axios.post(`${backend_api}/auth/register`, formdata);
    console.log(response.data);
    return response.data; // Contains user data and token/session info
  } catch (error) {
    throw new Error(error.response.data.message || "Registration failed");
  }
};

export const login = async (loginData) => {
  try {
    const response = await axios.post(`${backend_api}/auth/login`, loginData, {
      withCredentials: true,
    });
    return response.data; // Contains user data and token/session info
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${backend_api}/auth/logout`);
    // console.log(response.status)
    return response.status;
  } catch (error) {
    throw new Error(error.response.data.message || "Logout failed");
  }
};

export const RouteProtection = async () => {
  try {
    const response = await axios.get(`${backend_api}/auth/check-session`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      "Error during session cheking:",
      error.response.data.message
    );
  }
};
