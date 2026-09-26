import { useUser } from "./UserContext";
import Loading from "./Loading";
import JoinToday from "../page/JoinToday";

export default function ProtectedRoute({ children }) {
  const { user, userError, userIsLoading } = useUser();
  const isLoggedIn = !!user?.token;
  if (userIsLoading) {
    // console.log("Loading");

    return (
      <div className="md:w-[580px]">
        <Loading />
      </div>
    );
  }
  if (userError || !isLoggedIn) {
    return <JoinToday />;
  }
  return children;
}
