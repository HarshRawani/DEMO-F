import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { fetchMe } from "@/redux/loginSlice"; // adjust if different

export default function ProtectedRoute({ allowedRole }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth || {});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        await dispatch(fetchMe()).unwrap();
      } catch (err) {
        // ignore
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [dispatch]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;

  // not logged in
  if (!user) return <Navigate to="/auth/login" state={{ from: location }} replace />;

  // role not allowed
  if (allowedRole && !allowedRole.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // authorized -> render nested routes
  return <Outlet   
  />;
}