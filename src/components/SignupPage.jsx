import React from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";

const SignupPage = ({
  signupForm,
  setSignupForm,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  handleSignupSubmit,
  setCurrentPage,
}) => (
  <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#181f36,_#101624)] flex items-center justify-center p-4">
    <div className="bg-[#141a2b] rounded-2xl shadow-2xl w-full max-w-md p-8 text-[#e0e6f6]">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-[#a0aec0]">Join us today</p>
      </div>

      <form onSubmit={handleSignupSubmit} className="space-y-6">
        {/* Full Name */}
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

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email Address
          </label>
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

        {/* Password */}
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
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0aec0] w-5 h-5" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={signupForm.confirmPassword}
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  confirmPassword: e.target.value,
                })
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
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

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
          className="w-full bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-white py-3 rounded-lg transition-all flex items-center justify-center space-x-2 group shadow-lg"
        >
          <span>Create Account</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

export default SignupPage;
