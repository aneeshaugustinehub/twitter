import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import { useUser } from "./UserContext";

export default function Connect() {
  const { users } = useUser();
  const BASE_URL = import.meta.env.VITE_BASE_URL + "profilesImage/";
  

  return (
    <>
      <div className="px-4 py-3 ">
        <h2 className="text-xl font-bold text-black dark:text-white mb-3">
          Who to follow
        </h2>
        {users.map((u) => (
          <div
            key={u._id}
            className="flex items-center gap-3 py-2.5 dark:hover:bg-gray-900 hover:bg-gray-200 rounded-lg px-1 cursor-pointer transition-colors"
          >
            <img
              src={BASE_URL + u.profilePic}
              className={`object-cover w-11 h-11 rounded-full flex items-center justify-center bg-blue-900 text-black dark:text-white font-semibold text-sm flex-shrink-0`}
            />
            <Link to={`/${u.userId}`} className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-black dark:text-white">
                {u.name}
              </p>
              <p className="text-xs text-gray-500">{u.userId}</p>
              <p className="text-xs text-gray-400">{u.bio}</p>
            </Link>
            <FollowButton />
          </div>
        ))}
        <Link
          className="text-sky-500 text-sm mt-2 hover:underline"
          to="/explore"
        >
          Show more
        </Link>
      </div>
    </>
  );
}
