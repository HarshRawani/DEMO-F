import React from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";

const LoginPage = ({
  loginForm,
  setLoginForm,
  showPassword,
  setShowPassword,
  handleLoginSubmit,
  setCurrentPage,
  loading,
  error,
}) => (
  <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#181f36,_#101624)] flex items-center justify-center p-4">
    <div className="bg-[#141a2b] rounded-2xl shadow-2xl w-full max-w-md p-8 text-[#e0e6f6]">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-[#a0aec0]">Sign in to your account</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleLoginSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0aec0] w-5 h-5" />
            <input
              type="email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#7f5af0] outline-none"
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
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#2a3550] rounded-lg focus:ring-2 focus:ring-[#7f5af0] outline-none"
              placeholder="Enter your password"
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

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#7f5af0] border-gray-300 rounded focus:ring-[#7f5af0]"
            />
            <span className="ml-2 text-[#a0aec0]">Remember me</span>
          </label>
          <button type="button" className="text-[#5ddcff] hover:underline">
            Forgot password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#7f5af0] to-[#5ddcff] text-white py-3 rounded-lg transition-all flex items-center justify-center space-x-2 group shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Signing In...</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Switch */}
      <div className="mt-8 text-center">
        <p className="text-[#a0aec0]">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={() => setCurrentPage("signup")}
            className="text-[#7f5af0] hover:underline font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default LoginPage;