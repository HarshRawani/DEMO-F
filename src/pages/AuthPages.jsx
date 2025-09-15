import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Add this import
import { loginUser, registerUser } from "@/redux/loginSlice"; // Adjust path if needed
import LoginPage from "../components/LoginPage";
import SignupPage from "../components/SignupPage";

const AuthPages = ({ initialPage = "login" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add this
  const { loading, error, user } = useSelector((state) => state.auth); // Add user to selector

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // Default role
    age: "",
    grade: "",
    specialization: "",
    experience: "",
    organisationName: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // get the thunk result instead of relying on selector immediately
      const result = await dispatch(loginUser(loginForm)).unwrap();
      const payloadUser = result?.user || result?.data?.user || result; // cover shapes
      const role = payloadUser?.role;

      if (role === "student") navigate("/student/dashboard");
      else if (role === "counselor") navigate("/counselor/dashboard");
      else if (role === "admin") navigate("/admin/dashboard");
      else navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Payload matching controller: direct fields (no additionalInfo)
    const payload = {
      name: signupForm.name,
      email: signupForm.email,
      password: signupForm.password,
      role: signupForm.role,
      organisationName: signupForm.organisationName,
      age: signupForm.age,
      grade: signupForm.grade,
      specialization: signupForm.specialization,
      experience: signupForm.experience,
    };

    try {
      await dispatch(registerUser(payload)).unwrap();
      // After successful signup, navigate to login or dashboard
      // For now, navigate to login
      setCurrentPage("login");
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return currentPage === "login" ? (
    <LoginPage
      loginForm={loginForm}
      setLoginForm={setLoginForm}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      handleLoginSubmit={handleLoginSubmit}
      setCurrentPage={setCurrentPage}
      loading={loading}
      error={error}
    />
  ) : (
    <SignupPage
      signupForm={signupForm}
      setSignupForm={setSignupForm}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      showConfirmPassword={showConfirmPassword}
      setShowConfirmPassword={setShowConfirmPassword}
      handleSignupSubmit={handleSignupSubmit}
      setCurrentPage={setCurrentPage}
      loading={loading}
      error={error}
    />
  );
};

export default AuthPages;