import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPages from "@/pages/AuthPages";
import AppSideBar from "@/AppSideBar";
import StudentDashboard from "./pages/student/StudentDashboard";
import CounselorDashboard from "./pages/councelor/CouncelorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./resuable/ProtectedRoutes";

function AppRouter() {
  return (
    <Routes>
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
