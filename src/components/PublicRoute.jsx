import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

export default function PublicRoute({ children }) {
  const { user } = useUser();
  const isLoggedIn = !!user.islogged;

  if (isLoggedIn) {
    console.log(isLoggedIn);
    
    return <Navigate to="/home" replace />;
  }
  return children;
}
