import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../redux/loginSlice";

export default function ProtectedRoute({ children, allowedRole }) {
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
        // user not logged in
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [dispatch, location.pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f0f0f] text-white">
        Checking session...
      </div>
    );
  }

  // if no user or role not allowed → redirect
  if (!user || !allowedRole.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
