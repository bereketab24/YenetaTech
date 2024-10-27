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