import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";

function AppSideBar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div
      className="flex h-screen"
      style={{
        background:
          "radial-gradient(circle at 60% 40%, #181f36 0%, #101624 100%)",
      }}
    >
      {/* Custom Sidebar with collapse functionality */}
      <AppSidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {/* Sidebar Toggle Button - Top Left */}
        <button
          onClick={toggleSidebar}
          className="absolute top-6 left-6 p-2 rounded-lg hover:bg-[#2a3550]/30 transition-colors z-10"
        >
          <svg
            className="w-6 h-6 text-[#e0e6f6]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="bg-[#141a2b]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2a3550]/30 shadow-2xl mt-16">
          <h1 className="text-3xl font-bold text-[#e0e6f6] mb-2">Welcome</h1>
          <p className="text-[#a0aec0] text-lg">Your main content goes here.</p>
        </div>
      </main>
    </div>
  );
}

export default AppSideBar;
