// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://54.243.4.152:3000/api", // Replace with your actual base URL
});

export default api;
