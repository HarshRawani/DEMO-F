import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Building, GraduationCap, Users, Loader2 } from "lucide-react";

const SignupPage = ({
  signupForm,
  setSignupForm,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  handleSignupSubmit,
  setCurrentPage,
  loading,
  error,
}) => {
  const [selectedRole, setSelectedRole] = useState("student"); // Default to student

  const roles = [
    { key: "student", label: "Student", icon: GraduationCap },
    { key: "counselor", label: "Counselor", icon: Users },
    { key: "admin", label: "Admin", icon: Building }, // Changed from "organisation" to "admin"
  ];

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setSignupForm({ ...signupForm, role }); // Update role in form
  };

  // Add useEffect to set initial role
  useEffect(() => {
    setSignupForm({ ...signupForm, role: selectedRole });
  }, [selectedRole]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#181f36,_#101624)] flex items-center justify-center p-4">
      <div className="bg-[#141a2b] rounded-2xl shadow-2xl w-full max-w-3xl p-8 text-[#e0e6f6]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-[#a0aec0]">Join us today</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Role Toggle Tabs */}
        <div className="flex justify-center mb-6">
          {roles.map((role) => (
            <button
              key={role.key}
              onClick={() => handleRoleChange(role.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                selectedRole === role.key
                  ? "bg-[#5ddcff] text-white"
                  : "bg-[#2a3550] text-[#a0aec0] hover:bg-[#3a4550]"
              }`}
            >
              <role.icon className="w-4 h-4" />
              <span>{role.label}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSignupSubmit} className="space-y-6">
          {/* Common Fields */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0aec0] w-5 h-5" />
              <input
                type="text"
                value={signupForm.name}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, name: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#5ddcff] outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0aec0] w-5 h-5" />
              <input
                type="email"
                value={signupForm.email}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, email: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#5ddcff] outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Fields */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0aec0] w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                value={signupForm.password}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, password: e.target.value })
                }
                className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#5ddcff] outline-none"
                placeholder="Create a password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0aec0] hover:text-[#e0e6f6]"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0aec0] w-5 h-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={signupForm.confirmPassword}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, confirmPassword: e.target.value })
                }
                className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#5ddcff] outline-none"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0aec0] hover:text-[#e0e6f6]"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Role-Specific Fields */}
          {selectedRole === "student" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Age</label>
                <input
                  type="number"
                  value={signupForm.age || ""}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, age: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#5ddcff] outline-none"
                  placeholder="Enter your age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Grade</label>
                <input
                  type="text"
                  value={signupForm.grade || ""}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, grade: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#5ddcff] outline-none"
                  placeholder="Enter your grade"
                />
              </div>
            </>
          )}

          {selectedRole === "counselor" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Specialization</label>
                <input
                  type="text"
                  value={signupForm.specialization || ""}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, specialization: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#5ddcff] outline-none"
                  placeholder="Enter your specialization"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Experience (Years)</label>
                <input
                  type="number"
                  value={signupForm.experience || ""}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, experience: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#5ddcff] outline-none"
                  placeholder="Enter years of experience"
                />
              </div>
            </>
          )}

          {selectedRole === "admin" && ( // Changed from "organisation"
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Organisation Name</label>
                <input
                  type="text"
                  value={signupForm.organisationName || ""}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, organisationName: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#5ddcff] outline-none"
                  placeholder="Enter organisation name"
                  required
                />
              </div>
            </>
          )}

          {/* Terms */}
          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#5ddcff] border-gray-300 rounded focus:ring-[#5ddcff]"
              required
            />
            <span className="ml-2 text-[#a0aec0]">
              I agree to the{" "}
              <button type="button" className="text-[#5ddcff] hover:underline">
                Terms & Conditions
              </button>
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-white py-3 rounded-lg transition-all flex items-center justify-center space-x-2 group shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1/2 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Switch */}
        <div className="mt-8 text-center">
          <p className="text-[#a0aec0]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setCurrentPage("login")}
              className="text-[#5ddcff] hover:underline font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;