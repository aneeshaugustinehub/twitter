import { useState } from "react";
// import propic from "../assets/propic.jpg";
import {users} from "../components/DemoData"

export default function Connect() {
  
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
      {/* <div className="px-3 py-2 flex align-items-center justify-content-end Connect ">
        <img
          src={propic}
          alt="hugenerd"
          width="50"
          height="50"
          className="rounded-full"
        />
        <div className="px-2">
          <span className="fw-bold">username</span>
          <br />
          <span className="text-black dark:text-white-50 text-decoration-none">userid</span>
        </div>
        <button type="button" className="btn-follow">
          Follow
        </button>
      </div> */}
      <div className="px-4 py-3 border-b border-gray-800">
        <h2 className="text-xl font-bold text-black dark:text-white mb-3">Who to follow</h2>
        {users.map((u, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-2.5 dark:hover:bg-gray-900 hover:bg-gray-200 rounded-lg px-1 cursor-pointer transition-colors"
          >
            <div
              className={`w-11 h-11 rounded-full ${u.color} flex items-center justify-center text-black dark:text-white font-semibold text-sm flex-shrink-0`}
            >
              {u.init}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-black dark:text-white">{u.name}</p>
              <p className="text-xs text-gray-500">{u.handle}</p>
              <p className="text-xs text-gray-400">{u.bio}</p>
            </div>
            <FollowButton />
          </div>
        ))}
        <button className="text-sky-500 text-sm mt-2 hover:underline">
          Show more
        </button>
      </div>
    </>
  );
}
