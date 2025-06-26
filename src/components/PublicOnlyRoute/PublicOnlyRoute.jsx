import { Navigate } from "react-router-dom";

const PublicOnlyRoute = ({ children }) => {
  const token = localStorage.getItem("jwtToken");
  return token ? <Navigate to="/dashboard" replace /> : children;
};
export default PublicOnlyRoute;
