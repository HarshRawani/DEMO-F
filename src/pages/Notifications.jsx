import React from "react";
import { useSelector } from "react-redux";

const Notifications = () => {
  const user = useSelector((state) => state.auth.user);

  // User info fallback
  const userType = user?.role || "student";
  const userInfo = {
    name: user?.name || "User",
    email: user?.email || "user@example.com",
    role: user?.role
      ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
      : "User",
  };

  return (
    <div className="bg-[#141a2b]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2a3550]/30 shadow-xl">
      <h1 className="text-3xl font-bold text-[#e0e6f6] mb-6">Notifications</h1>

      {/* Email Notifications */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#e0e6f6] mb-2">
          Email Notifications
        </h2>
        <p className="text-[#a0aec0] mb-3">
          Manage how you want to receive updates on {userInfo.email}.
        </p>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="accent-[#7f5af0]"
              defaultChecked
            />
            <span className="text-[#e0e6f6]">Product updates</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-[#7f5af0]" />
            <span className="text-[#e0e6f6]">Reminders & alerts</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-[#7f5af0]" />
            <span className="text-[#e0e6f6]">Promotional offers</span>
          </label>
        </div>
      </div>

      {/* In-app Notifications */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#e0e6f6] mb-2">
          In-app Notifications
        </h2>
        <p className="text-[#a0aec0] mb-3">
          Control which notifications you see inside the app.
        </p>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="accent-[#7f5af0]"
              defaultChecked
            />
            <span className="text-[#e0e6f6]">Mentions</span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="accent-[#7f5af0]"
              defaultChecked
            />
            <span className="text-[#e0e6f6]">Direct messages</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-[#7f5af0]" />
            <span className="text-[#e0e6f6]">Announcements</span>
          </label>
        </div>
      </div>

      <button className="bg-[#7f5af0] hover:bg-[#6a46d9] text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition">
        Save Changes
      </button>
    </div>
  );
};

export default Notifications;
