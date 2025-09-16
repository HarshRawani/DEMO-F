// src/components/sidebar-menu.jsx
import {
  MessageSquare,
  BarChart3,
  Clock,
  Calendar,
  Users,
  Play,
  Star,
  AlertCircle,
  BookOpen,
  FileText,
  UserCheck,
  Heart,
  Phone,
  Video,
  Archive,
  TrendingUp,
  Activity,
  Shield,
  ClipboardList,
  PieChart,
  UserPlus,
  Settings,
} from "lucide-react";

// Define menu items for each user type
const menuConfigs = {
  admin: [
    { title: "Dashboard", url: "/admin/dashboard", icon: BarChart3 },
    { title: "User Management", url: "#", icon: UserPlus },
    { title: "Analytics", url: "#", icon: TrendingUp },
    { title: "Content Management", url: "#", icon: FileText },
    { title: "Crisis Management", url: "#", icon: Shield },
    { title: "Reports", url: "#", icon: PieChart },
    { title: "System Settings", url: "#", icon: Settings },
    { title: "Audit Logs", url: "#", icon: Archive },
  ],

  student: [
    { title: "Dashboard", url: "/student/dashboard", icon: BarChart3 },
    { title: "Saved Chats", url: "#", icon: MessageSquare },
    { title: "Book Appointments", url: "#", icon: Calendar },
    { title: "Mood Tracker", url: "#", icon: Star },
    { title: "Journal", url: "#", icon: BookOpen },
    { title: "Videos & Resources", url: "#", icon: Play },
    { title: "Peer Support", url: "#", icon: Users },
    { title: "Crisis Support", url: "#", icon: AlertCircle },
    { title: "Progress Tracking", url: "#", icon: Activity },
  ],

  counselor: [
    { title: "Dashboard", url: "/counselor/dashboard", icon: BarChart3 },
    { title: "My Appointments", url: "#", icon: Calendar },
    { title: "Student Sessions", url: "#", icon: Users },
    { title: "Case Notes", url: "#", icon: FileText },
    { title: "Progress Reports", url: "#", icon: ClipboardList },
    { title: "Video Sessions", url: "#", icon: Video },
    { title: "Crisis Alerts", url: "#", icon: AlertCircle },
    { title: "Resources Library", url: "#", icon: BookOpen },
    { title: "Wellness Check", url: "#", icon: Heart },
  ],
};

export function SidebarMenu({ userType = "admin", isCollapsed = false }) {
  // Get menu items based on user type, fallback to admin if type not found
  const menuItems = menuConfigs[userType] || menuConfigs.admin;

  return (
    <nav className="flex-1 p-4 overflow-y-hidden scrollbar-hide">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={item.title} className="relative group">
            <a
              href={item.url}
              className={`flex items-center rounded-lg transition-all duration-200 text-[#a0aec0] hover:text-[#e0e6f6] hover:bg-[#2a3550]/50 relative ${
                isCollapsed
                  ? "justify-center w-12 h-12 mx-auto"
                  : "gap-4 px-3 py-3 h-12"
              }`}
            >
              {/* Fixed icon container with consistent sizing */}
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <item.icon
                  className="w-5 h-5 transition-colors hover:text-[#7f5af0]"
                  strokeWidth={1.5}
                />
              </div>

              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                }`}
              >
                {item.title}
              </span>

              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 px-3 py-2 bg-[#2a3550] text-[#e0e6f6] text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                  {item.title}
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
