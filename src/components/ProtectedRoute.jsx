import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

export default function ProtectedRoute({ children }) {
  const { user } = useUser();
  const isLoggedIn = !!user.token;
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
