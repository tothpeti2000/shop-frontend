import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const ProtectedRoute: FC<any> = ({ children }) => {
  const { token } = useUserContext();

  return token !== null ? children || <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
