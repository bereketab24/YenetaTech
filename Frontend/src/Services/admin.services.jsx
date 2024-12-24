import axios from "axios";
const backend_api = import.meta.env.VITE_BACKEND_API_URL;
export const getalluser = async () => {
    try {
        const response = await axios.get(`${backend_api}/admin/users`, {withCredentials : true})   
        return response
        
    } catch (error) {
        throw new Error("Error to get all the courses:",error.response.data.message)
        
    }
}

export const deleteuser = async (userId) => {
    try {
      const response = await axios.delete(`${backend_api}/admin/users/${userId}`, {withCredentials: true});
      console.log(response)
      return response.data;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };