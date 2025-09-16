// src/components/app-sidebar.jsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Bell,
  Palette,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { SidebarMenu } from "./sidebar-menu";
import { logoutUser } from "@/redux/loginSlice";

export function AppSidebar({ isCollapsed = false, onToggle }) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Determine user type and info from Redux state
  const userType = user?.role || "student";
  const userInfo = {
    name: user?.name || "User",
    email: user?.email || "user@example.com",
    role: user?.role
      ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
      : "User",
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigate("/");
      setShowProfileDropdown(false);
    } catch (error) {
      console.error("Logout failed:", error);
      // Force logout even if API call fails
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/");
    }
  };

  const handleMenuItemClick = (action) => {
    switch (action) {
      case "logout":
        handleLogout();
        break;
      case "help":
        navigate("/help");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "notifications":
        navigate("/notifications");
        break;
      case "customization":
        navigate("/customization");
        break;
      default:
        break;
    }
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <div
      className={`min-h-screen flex flex-col relative transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      style={{ backgroundColor: "#141a2b" }}
    >
      {/* Header */}
      <div className="p-4 border-b border-[#2a3550] flex items-center justify-between overflow-hidden">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-10 h-10 bg-gradient-to-r from-[#7f5af0] to-[#5ddcff] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span
            className={`text-[#e0e6f6] font-semibold text-xl transition-opacity duration-300 ${
              isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            }`}
          >
            Vybe
          </span>
        </div>

        <button
          onClick={onToggle}
          className="p-1.5 rounded-lg hover:bg-[#2a3550]/50 transition-colors flex-shrink-0"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-[#a0aec0]" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-[#a0aec0]" />
          )}
        </button>
      </div>

      {/* Navigation Menu - Now using SidebarMenu component */}
      <SidebarMenu userType={userType} isCollapsed={isCollapsed} />

      {/* Profile Section */}
      <div className="relative">
        {/* Profile Dropdown */}
        {showProfileDropdown && (
          <div
            className={`absolute ${
              isCollapsed ? "bottom-full left-0" : "bottom-full left-0"
            } mb-2 ${
              isCollapsed ? "w-80" : "w-80"
            } bg-[#2a3550] rounded-xl shadow-2xl border border-[#3a4561] overflow-hidden z-50`}
          >
            {/* Profile Header */}
            <div className="p-4 border-b border-[#3a4561] flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#7f5af0] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-lg">
                  {userInfo.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <div className="text-[#e0e6f6] font-semibold">
                  {userInfo.name}
                </div>
                <div className="text-[#a0aec0] text-sm">{userInfo.role}</div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <div className="px-4 py-3 flex items-center space-x-3 text-[#a0aec0] cursor-default">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-[#7f7f7f]">Email</div>
                  <div className="text-sm">{userInfo.email}</div>
                </div>
              </div>

              {/* Other profile menu items */}
              {[
                { title: "Notifications", icon: Bell, action: "notifications" },
                {
                  title: "Customization",
                  icon: Palette,
                  action: "customization",
                },
                { title: "Settings", icon: Settings, action: "settings" },
                { title: "Help", icon: HelpCircle, action: "help" },
                { title: "Log out", icon: LogOut, action: "logout" },
              ].map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleMenuItemClick(item.action)}
                  className="w-full px-4 py-3 flex items-center space-x-3 text-[#a0aec0] hover:text-[#e0e6f6] hover:bg-[#3a4561] transition-colors text-left"
                >
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm">{item.title}</span>
                  {item.title === "Help" && (
                    <ChevronRight
                      className="w-4 h-4 ml-auto"
                      strokeWidth={1.5}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Profile Button */}
        <div className="p-4 border-t border-[#2a3550]">
          <button
            onClick={toggleProfileDropdown}
            className={`flex items-center space-x-3 hover:bg-[#2a3550]/50 transition-colors rounded-lg w-full ${
              isCollapsed ? "justify-center p-2" : "p-3"
            }`}
          >
            <div className="w-10 h-10 bg-[#7f5af0] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold">
                {userInfo.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div
              className={`text-left transition-all duration-300 ${
                isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              }`}
            >
              <div className="text-[#e0e6f6] font-medium text-sm">
                {userInfo.name}
              </div>
              <div className="text-[#a0aec0] text-xs">{userInfo.role}</div>
            </div>
          </button>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showProfileDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowProfileDropdown(false)}
        />
      )}
    </div>
  );
}
