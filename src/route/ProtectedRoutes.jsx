import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token_user");

  if (!token) {
    return <Navigate to="/login" />;
  }
  return <>{children || <Outlet />}</>;
};

export default ProtectedRoutes;
