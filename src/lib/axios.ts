import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
