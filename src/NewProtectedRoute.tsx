import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function NewProtectedRoute() {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("auth-session");

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}
