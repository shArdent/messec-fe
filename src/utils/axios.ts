import axios from "axios";

const defaultOptions = {
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosIntance = axios.create(defaultOptions);

axiosIntance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axiosIntance;
