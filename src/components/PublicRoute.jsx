import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";
import Loading from "./Loading";
import JoinToday from "../page/JoinToday";

export default function PublicRoute({ children }) {
  const { user, userError, userIsLoading } = useUser();  
  const isLoggedIn = !!user?.token;
  if (userIsLoading) {
    console.log("Loading");

    return <Loading />;
  }
  if (userError) {
    console.log("userError");
    return <JoinToday/>;
  }
  if (isLoggedIn) {
    console.log("isLoggedIn");
    return <Navigate to="/home" replace />;
  }
  return children;
}
