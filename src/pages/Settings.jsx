import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Settings() {
  // ✅ Get current user info from Redux
  const user = useSelector((state) => state.auth.user);

  // ✅ Normalize user data
  const userType = user?.role || "student";
  const userInfo = {
    name: user?.name || "User",
    email: user?.email || "user@example.com",
    role: user?.role
      ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
      : "User",
  };

  // ✅ States (editable fields)
  const [username, setUsername] = useState(userInfo.name);
  const [emails, setEmails] = useState([
    { id: 1, email: userInfo.email, verified: true, primary: true },
  ]);
  const [newEmail, setNewEmail] = useState("");

  const addEmail = () => {
    if (!newEmail) return;
    setEmails((prev) => [
      ...prev,
      { id: Date.now(), email: newEmail, verified: false, primary: false },
    ]);
    setNewEmail("");
  };

  const removeEmail = (id) => {
    setEmails((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="bg-[#141a2b]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2a3550]/30 shadow-2xl">
      <h2 className="text-sm text-[#a0aec0] uppercase">Account</h2>
      <h1 className="text-3xl font-bold text-[#e0e6f6] mb-6">Settings</h1>

      {/* USER OVERVIEW */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-[#e0e6f6] mb-3">
          User Overview
        </h3>
        <p className="text-[#a0aec0] mb-2">
          Role: <span className="text-[#e0e6f6]">{userInfo.role}</span>
        </p>
        <p className="text-[#a0aec0] mb-6">
          Primary Email:{" "}
          <span className="text-[#e0e6f6]">{userInfo.email}</span>
        </p>
      </section>

      {/* USERNAME */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-[#e0e6f6] mb-3">
          Your Username
        </h3>
        <p className="text-[#a0aec0] mb-2">
          This is how users will see you. You have 2 changes left.
        </p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg bg-[#1c2337] border border-[#2a3550] p-3 text-[#e0e6f6] mb-6"
        />
      </section>

      {/* EMAIL ADDRESSES */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-[#e0e6f6] mb-4">Emails</h3>
        <p className="text-[#a0aec0] mb-3">
          We will never share your email address or display it publicly.
        </p>

        <div className="space-y-3 mb-4">
          {emails.map((e) => (
            <div
              key={e.id}
              className="flex items-center justify-between p-3 bg-[#1c2337] border border-[#2a3550] rounded-lg"
            >
              <div>
                <div className="text-[#e0e6f6]">{e.email}</div>
                <div className="text-xs text-[#a0aec0]">
                  {e.verified ? "verified" : "unverified"}{" "}
                  {e.primary && "· primary"}
                </div>
              </div>
              {!e.primary && (
                <button
                  onClick={() => removeEmail(e.id)}
                  className="text-red-400 hover:text-red-500"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-6">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Add another email"
            className="flex-1 rounded-lg bg-[#1c2337] border border-[#2a3550] p-3 text-[#e0e6f6] placeholder-[#a0aec0]"
          />
          <button
            onClick={addEmail}
            type="button"
            className="bg-[#7f5af0] hover:bg-[#6b46d9] text-white px-4 py-2 rounded-lg shadow-md"
          >
            Add
          </button>
        </div>
      </section>

      {/* CONNECTED ACCOUNTS */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-[#e0e6f6] mb-3">
          Connected Accounts
        </h3>
        <p className="text-[#a0aec0] mb-4">
          Connect your other accounts to share progress and scores.
        </p>
        <button className="bg-[#7f5af0] hover:bg-[#6b46d9] text-white px-6 py-2 rounded-lg shadow-md">
          Connect Account
        </button>
      </section>

      {/* EXPORT DATA */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-[#e0e6f6] mb-3">
          Export Data
        </h3>
        <p className="text-[#a0aec0] mb-3">
          Create and download an archive of your data.
        </p>
        <button className="bg-[#7f5af0] hover:bg-[#6b46d9] text-white px-6 py-2 rounded-lg shadow-md">
          Create new archive
        </button>
      </section>

      {/* DELETE ACCOUNT */}
      <section>
        <h3 className="text-xl font-semibold text-red-400 mb-3">
          Delete Account
        </h3>
        <p className="text-[#a0aec0] mb-3">
          Permanently delete your account and all information related to it.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md">
          Delete Account
        </button>
      </section>
    </div>
  );
}
