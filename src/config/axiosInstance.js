import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Add token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle global errors
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // Handle unauthorized access - clear all auth data
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
      console.warn("Unauthorized. Logging out...");
      // Optionally redirect to login page
      // window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;