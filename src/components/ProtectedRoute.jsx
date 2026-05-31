import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("username");
  console.log(isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}