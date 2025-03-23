import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance"; // Your configured axios instance

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axiosInstance.post("/auth/logout"); // Call backend to clear cookies (if implemented)
        localStorage.removeItem("token"); // Remove token if stored in localStorage
        navigate("/login"); // Redirect to login page
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    handleLogout();
  }, [navigate]);

  return <h2>Logging out...</h2>; // Temporary message
};

export default Logout;
