// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // Your base API URL
});

export default axiosInstance;
