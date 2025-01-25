import axios from "axios";

const defaultOptions = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosIntance = axios.create(defaultOptions);

axiosIntance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});

export default axiosIntance;
