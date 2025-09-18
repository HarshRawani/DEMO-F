// src/AppSideBar.jsx
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppSidebar } from "@/components/app-sidebar";
import StudentDashboard from "./pages/student/StudentDashboard";
import CounselorDashboard from "./pages/councelor/CouncelorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { Outlet } from "react-router-dom";

function AppSideBar({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen">
      <AppSidebar isCollapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <main className="flex-1 p-0 relative bg-[#101624]">
        <div className="bg-[#101624]">
          {/* render passed children when present, otherwise render nested Outlet */}
          {children ?? <Outlet />}
        </div>
      </main>
    </div>
  );
}

export default AppSideBar;
