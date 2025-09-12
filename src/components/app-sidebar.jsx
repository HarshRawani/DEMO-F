import { useState } from "react";
import {
  MessageSquare,
  BarChart3,
  Clock,
  Calendar,
  Users,
  Play,
  Star,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  Bell,
  Palette,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

// Menu items matching the image
const items = [
  { title: "Saved chat", url: "#", icon: MessageSquare },
  { title: "Dashboard", url: "#", icon: BarChart3 },
  { title: "Recommendations", url: "#", icon: Clock },
  { title: "Book Appointments", url: "#", icon: Calendar },
  { title: "Peer Support", url: "#", icon: Users },
  { title: "Videos & Audios", url: "#", icon: Play },
  { title: "Mood Tracker / Journals", url: "#", icon: Star },
  { title: "Crisis Support", url: "#", icon: AlertCircle },
];

// Profile dropdown menu items
const profileMenuItems = [
  { title: "Email", icon: Mail, value: "harsh@gmail.com" },
  { title: "Notifications", url: "#", icon: Bell },
  { title: "Customization", url: "#", icon: Palette },
  { title: "Settings", url: "#", icon: Settings },
  { title: "Help", url: "#", icon: HelpCircle },
  { title: "Log out", url: "#", icon: LogOut },
];

export function AppSidebar({ isCollapsed = false, onToggle }) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <div
      className={`sidebar h-screen flex flex-col relative ${
        isCollapsed ? "sidebar-collapsed" : "w-64"
      }`}
      style={{ backgroundColor: "#141a2b" }}
    >
      {/* Header - Only show when NOT collapsed */}
      {!isCollapsed && (
        <div className="sidebar-header p-6 border-b border-[#2a3550] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#7f5af0] to-[#5ddcff] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-[#e0e6f6] font-semibold text-xl">Vybe</span>
          </div>

          <button onClick={onToggle} className="sidebar-toggle">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Collapse button for collapsed state */}
      {isCollapsed && (
        <button
          onClick={onToggle}
          className="sidebar-toggle absolute top-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Navigation Menu */}
      <nav
        className={`sidebar-nav flex-1 ${isCollapsed ? "pt-16 px-2" : "p-4"}`}
        style={{ backgroundColor: "#141a2b" }}
      >
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={item.title} className="relative">
              <a
                href={item.url}
                className={`sidebar-nav-item flex items-center rounded-lg transition-all duration-200 group relative ${
                  isCollapsed ? "justify-center p-3" : "gap-3 px-3 py-2.5"
                }`}
                style={{ backgroundColor: "transparent" }}
              >
                <item.icon className="sidebar-icon h-5 w-5 transition-colors flex-shrink-0" />
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.title}</span>
                )}

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="sidebar-tooltip">{item.title}</div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Profile Section - Bottom Left */}
      <div className="relative">
        {/* Profile Dropdown */}
        {showProfileDropdown && (
          <div className="absolute bottom-full left-0 mb-2 w-80 bg-[#2a3550] rounded-xl shadow-2xl border border-[#3a4561] overflow-hidden z-50">
            {/* Profile Header */}
            <div className="p-4 border-b border-[#3a4561] flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#7f5af0] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">H</span>
              </div>
              <div>
                <div className="text-[#e0e6f6] font-semibold">Harsh Rawani</div>
                <div className="text-[#a0aec0] text-sm">Admin</div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {profileMenuItems.map((item, index) => (
                <div key={item.title}>
                  {item.title === "Email" ? (
                    <div className="px-4 py-3 flex items-center space-x-3 text-[#a0aec0] cursor-default">
                      <item.icon className="w-4 h-4" />
                      <div>
                        <div className="text-xs text-[#7f7f7f]">
                          {item.title}
                        </div>
                        <div className="text-sm">{item.value}</div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.url}
                      className="px-4 py-3 flex items-center space-x-3 text-[#a0aec0] hover:text-[#e0e6f6] hover:bg-[#3a4561] transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.title}</span>
                      {item.title === "Help" && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profile Button */}
        <div
          className={`p-4 border-t border-[#2a3550] ${
            isCollapsed ? "flex justify-center" : ""
          }`}
        >
          <button
            onClick={toggleProfileDropdown}
            className={`flex items-center space-x-3 hover:bg-[#2a3550]/50 transition-colors rounded-lg ${
              isCollapsed ? "p-2" : "w-full p-3"
            }`}
          >
            <div className="w-10 h-10 bg-[#7f5af0] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold">H</span>
            </div>
            {!isCollapsed && (
              <div className="text-left">
                <div className="text-[#e0e6f6] font-medium text-sm">
                  Harsh Rawani
                </div>
                <div className="text-[#a0aec0] text-xs">Admin</div>
              </div>
            )}
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
