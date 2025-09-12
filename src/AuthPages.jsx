import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

const AuthPages = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", loginForm);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup:", signupForm);
  };

  return currentPage === "login" ? (
    <LoginPage
      loginForm={loginForm}
      setLoginForm={setLoginForm}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      handleLoginSubmit={handleLoginSubmit}
      setCurrentPage={setCurrentPage}
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
    />
  );
};

export default AuthPages;
