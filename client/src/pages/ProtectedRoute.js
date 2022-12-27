import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Loading } from "../components";
import { useAppContext } from "../context/appContext";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();
  if (userLoading) return <Loading />;
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
export default ProtectedRoute;
