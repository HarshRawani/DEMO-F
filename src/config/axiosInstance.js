import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Add token to every request
axiosInstance.interceptors.request.use((config) => {
//   const publicEndpoints = [
    //add public endpoints here, like register and login page
//   ];
  
  if (publicEndpoints.some((ep) => config.url.includes(ep))) {
    // Don't add token for public endpoints
    return config;
  }
  
  // Try to get token from both possible storage locations for backward compatibility
  let token = localStorage.getItem("token");
  if (!token) {
    const authData = JSON.parse(localStorage.getItem("auth") || "{}");
    token = authData.token;
  }
  
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