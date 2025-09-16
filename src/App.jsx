// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPages from "@/pages/AuthPages";
import AppSideBar from "@/AppSideBar";
import StudentDashboard from "./pages/student/StudentDashboard";
import CounselorDashboard from "./pages/councelor/CouncelorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./resuable/ProtectedRoutes";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Customization from "./pages/Customization";
import Help2 from "./pages/Help2";

function AppRouter() {
  return (
    <Routes>
      // Add these routes in your AppRouter function
      <Route
        path="/settings"
        element={
          <ProtectedRoute allowedRole={["student", "counselor", "admin"]}>
            <AppSideBar>
              <Settings />
            </AppSideBar>
          </ProtectedRoute>
        }
      />
      <Route
        path="/help"
        element={
          <ProtectedRoute allowedRole={["student", "counselor", "admin"]}>
            <AppSideBar>
              <Help2 />
            </AppSideBar>
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute allowedRole={["student", "counselor", "admin"]}>
            <AppSideBar>
              <Notifications />
            </AppSideBar>
          </ProtectedRoute>
        }
      />
      <Route
        path="/customization"
        element={
          <ProtectedRoute allowedRole={["student", "counselor", "admin"]}>
            <AppSideBar>
              <Customization />
            </AppSideBar>
          </ProtectedRoute>
        }
      />
      {/* Public */}
      <Route path="/" element={<AuthPages />} />
      <Route path="/auth/*" element={<AuthPages />} />
      {/* Protected dashboards */}
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute allowedRole={["student"]}>
            <AppSideBar>
              <StudentDashboard />
            </AppSideBar>
          </ProtectedRoute>
        }
      />
      <Route
        path="/counselor/dashboard"
        element={
          <ProtectedRoute allowedRole={["counselor"]}>
            <AppSideBar>
              <CounselorDashboard />
            </AppSideBar>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole={["admin"]}>
            <AppSideBar>
              <AdminDashboard />
            </AppSideBar>
          </ProtectedRoute>
        }
      />
      {/* fallback */}
      <Route path="*" element={<AuthPages />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
