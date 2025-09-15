import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPages from '../pages/AuthPages'; // Adjust path if needed

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPages initialPage="login" />} />
      <Route path="/signup" element={<AuthPages initialPage="signup" />} />
    </Routes>
  );
};

export default AuthRoutes;