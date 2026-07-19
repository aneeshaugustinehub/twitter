import { useState } from "react";
import { Link } from "react-router-dom";

// import propic from "../assets/propic.jpg";
// import axios from "axios";
import { useUser } from "./UserContext";

export default function Connect() {
  const { users } = useUser();
  const BASE_URL = import.meta.env.VITE_BASE_URL + "profilesImage/";
  
  function FollowButton() {
    const [following, setFollowing] = useState(false);
    return (
      <button
        onClick={() => setFollowing(!following)}
        className={`rounded-full px-4 py-1.5 text-sm font-semibold flex-shrink-0 transition-colors ${
          following
            ? "border border-gray-600 text-black dark:text-white hover:border-red-500 hover:text-red-500"
            : "color-btn"
        }`}
      >
        {following ? "Following" : "Follow"}
      </button>
    );
  }
  return (
    <>
      <div className="px-4 py-3 border border-gray-800 my-2 mx-4 rounded-2xl">
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
              className={`w-11 h-11 rounded-full flex items-center justify-center bg-blue-900 text-black dark:text-white font-semibold text-sm flex-shrink-0`}
            />
            <Link to={`/user/${u.userId}`} className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-black dark:text-white">
                {u.name}
              </p>
              <p className="text-xs text-gray-500">{u.userId}</p>
              <p className="text-xs text-gray-400">{u.bio}</p>
            </Link>
            <FollowButton />
          </div>
        ))}
        <button
          className="text-sky-500 text-sm mt-2 hover:underline"
          onClick={""}
        >
          Show more
        </button>
      </div>
    </>
  );
}
