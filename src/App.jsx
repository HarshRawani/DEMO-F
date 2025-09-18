import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPages from "@/pages/AuthPages";
import AppSideBar from "@/AppSideBar";
import StudentDashboard from "./pages/student/StudentDashboard";
import CounselorDashboard from "./pages/councelor/CouncelorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ClassroomManagement from "./pages/admin/ClassroomManagement";
import StudentAnalytics from "./pages/admin/StudentAnalytics";
import CriticalAlerts from "./pages/admin/CriticalAlerts";
import WellnessTracking from "./pages/admin/WellnessTracking";
import Announcements from "./pages/admin/Announcements";
import PrivacySecurity from "./pages/admin/PrivacySecurity";
import BusinessCollaboration from "./pages/admin/BuisnessCollaboration";
import ProtectedRoute from "./resuable/ProtectedRoutes";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Customization from "./pages/Customization";
import Help2 from "./pages/Help2";
import BookAppointments from "./pages/student/BookAppointments";

// -------- Layout Wrappers --------
const StudentLayout = ({ children }) => (
  <AppSideBar>{children}</AppSideBar>
);

const CounselorLayout = ({ children }) => (
  <AppSideBar>{children}</AppSideBar>
);

const AdminLayout = ({ children }) => (
  <AppSideBar>{children}</AppSideBar>
);

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
        path="/student/book-appointments"
        element={
          <ProtectedRoute allowedRole={["student"]}>
            <AppSideBar>
              <BookAppointments />
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

      {/* Student Routes */}
      <Route
        element={<ProtectedRoute allowedRole={["student"]} />}
      >
        <Route
          path="/student/dashboard"
          element={
            <StudentLayout>
              <StudentDashboard />
            </StudentLayout>
          }
        />
      </Route>

      {/* Counselor Routes */}
      <Route
        element={<ProtectedRoute allowedRole={["counselor"]} />}
      >
        <Route
          path="/counselor/dashboard"
          element={
            <CounselorLayout>
              <CounselorDashboard />
            </CounselorLayout>
          }
        />
      </Route>

      {/* Admin Routes */}
      <Route
        element={<ProtectedRoute allowedRole={["admin"]} />}
      >
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/classrooms"
          element={
            <AdminLayout>
              <ClassroomManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <AdminLayout>
              <StudentAnalytics />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/alerts"
          element={
            <AdminLayout>
              <CriticalAlerts />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/wellness"
          element={
            <AdminLayout>
              <WellnessTracking />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/announcements"
          element={
            <AdminLayout>
              <Announcements />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/collaboration"
          element={
            <AdminLayout>
              <BusinessCollaboration />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/privacy"
          element={
            <AdminLayout>
              <PrivacySecurity />
            </AdminLayout>
          }
        />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<AuthPages />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-transparent min-h-screen"> {/* Ensure transparent bg */}
      <AppRouter />
      </div>
    </Router>
  );
}
