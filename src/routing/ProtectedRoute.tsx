import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

const ProtectedRoute: FC<any> = ({ children }) => {
  const { isLoggedIn } = useUser();

  return isLoggedIn() ? children || <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
