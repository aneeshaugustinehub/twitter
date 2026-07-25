import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";
import Loading from "./Loading";

export default function ProtectedRoute({ children }) {
  const { user, userError, userIsLoading } = useUser();  
  const isLoggedIn = !!user?.token;
  if (userIsLoading) {
    console.log("Loading");

    return <Loading />;
  }
  if (userError) {
    console.log("userError");
    return <Navigate to="/login" replace />;
  }
  if (!isLoggedIn) {
    console.log("isLoggedIn");

    return <Navigate to="/login" replace />;
  }
  return children;
}
