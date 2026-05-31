import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

export default function ProtectedRoute({ children }) {
  const { user } = useUser();
  const isLoggedIn = !!user.token;
  console.log("isLoggedIn",isLoggedIn)
  console.log("user",user);
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
