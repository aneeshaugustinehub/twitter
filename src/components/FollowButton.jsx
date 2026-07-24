import { useState } from "react";
export default function FollowButton() {
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
