import React from "react";
import { useSelector } from "react-redux";

const Customization = () => {
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
      <h1 className="text-3xl font-bold text-[#e0e6f6] mb-6">Customization</h1>

      {/* Theme Selection */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#e0e6f6] mb-2">Theme</h2>
        <p className="text-[#a0aec0] mb-3">Choose your preferred appearance.</p>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-lg bg-[#7f5af0] text-white font-medium shadow hover:bg-[#6a46d9] transition">
            Dark
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#2a3550] text-[#e0e6f6] font-medium shadow hover:bg-[#3b496e] transition">
            Light
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#2a3550] text-[#e0e6f6] font-medium shadow hover:bg-[#3b496e] transition">
            System
          </button>
        </div>
      </div>

      {/* Accent Color */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#e0e6f6] mb-2">
          Accent Color
        </h2>
        <p className="text-[#a0aec0] mb-3">
          Pick a highlight color for buttons and links.
        </p>
        <div className="flex gap-3">
          <span className="w-8 h-8 rounded-full bg-[#7f5af0] cursor-pointer border-2 border-white"></span>
          <span className="w-8 h-8 rounded-full bg-[#5ddcff] cursor-pointer"></span>
          <span className="w-8 h-8 rounded-full bg-[#f87171] cursor-pointer"></span>
          <span className="w-8 h-8 rounded-full bg-[#34d399] cursor-pointer"></span>
        </div>
      </div>

      {/* Layout Options */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#e0e6f6] mb-2">Layout</h2>
        <p className="text-[#a0aec0] mb-3">
          Switch between compact or spacious layouts.
        </p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-[#e0e6f6]">
            <input type="radio" name="layout" defaultChecked />
            Compact
          </label>
          <label className="flex items-center gap-2 text-[#e0e6f6]">
            <input type="radio" name="layout" />
            Spacious
          </label>
        </div>
      </div>

      <button className="bg-[#7f5af0] hover:bg-[#6a46d9] text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition">
        Save Changes
      </button>
    </div>
  );
};

export default Customization;
