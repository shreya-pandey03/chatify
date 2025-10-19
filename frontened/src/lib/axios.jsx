import axios from "axios";




const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // or your actual backend URL
  withCredentials: true, // if you're using cookies for auth
});
export { axiosInstance };