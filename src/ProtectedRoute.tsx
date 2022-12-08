import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("auth-session");

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="register" replace state={{ from: location }} />
  );
}
