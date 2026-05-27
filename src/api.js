import axios from "axios";

export const API_BASE_URL = "https://chat-production-b38f.up.railway.app";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default api;
