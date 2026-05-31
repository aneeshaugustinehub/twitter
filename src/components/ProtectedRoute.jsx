import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("token");
  console.log(isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}