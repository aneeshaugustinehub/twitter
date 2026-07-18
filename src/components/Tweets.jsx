// import propic from "../assets/propic.jpg";
import { CiHeart } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";

export default function Tweets({ tweet }) {
  function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr);
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 7) return `${days}d`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
  return (
    <div className="custom-border px-3 pt-2">
      <div className="flex gap-3">
        <div className="shrink-0">
          <img
            src={"ProfileImage"}
            alt="img"
            width={40}
            height={40}
            className="rounded-full h-12 w-12 object-cover"
          />
        </div>
{/* 
{tweet._id}
{tweet.updatedAt}
*/}

        {/* Content */}
        <dialog className="color dark:bg-gray-900 bg-gray-200  m-auto px-2 rounded-lg">
          <ul className="mt-2 rounded-lg ">
            <li className="dropdown-item">Delete</li>
            <li className="dropdown-item">Pin to your profile</li>
            <li className="dropdown-item">Highlight on your profile</li>
            <li className="dropdown-item">Add/remove from Lists</li>
            <li className="dropdown-item">Mute this conversation</li>
            <li className="dropdown-item">Add/remove content disclosure</li>
            <li className="dropdown-item">Change who can reply</li>
            <li className="dropdown-item">View post activity</li>
            <li className="dropdown-item">Embed post</li>
            <li className="dropdown-item">View post analytics</li>
            <li className="dropdown-item">View hidden replies</li>
            <li className="dropdown-item">Write a Community Note</li>
            <li className="dropdown-item">Request Community Note</li>
          </ul>
        </dialog>
        <div className="flex flex-col flex-1">
          {/* tweetname row */}
          <div className="flex justify-center">
            <a href="" className="font-bold ">
              {tweet.postedBy}
            </a>
            <p className="font-light text-gray-500 mx-2">@{tweet.postedBy}</p> <p className="font-light text-gray-500">{timeAgo(tweet.createdAt)} </p>
            <button
              onClick={""}
              className="ml-auto rounded-full hover:bg-gray-800 hover:text-sky-400 px-2"
            >
              ...
            </button>
          </div>

          {/* Tweet text */}
          <p className="mt-1 ">{tweet.description}</p>

          {/* Image */}
          <div>
            <img
              className="rounded-2xl w-full"
              src={tweet.imagePath}
              alt="post image"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-between pt-2 ">
            <button type="button" className="flex inline-flex p-2 hover:text-blue-400">
              <BiMessageRounded className="text-xl font-light mx-1"/>{tweet.commentCount}
            </button>
            <button type="button" className="flex inline-flex p-2 hover:text-red-400">
              <CiHeart className="text-xl font-light mx-1"/>{tweet.likeCount}
            </button>
            <button type="button" className="flex inline-flex p-2 hover:text-green-400">
              <BiRepost className="text-xl font-light mx-1"/> {tweet.retweetCount}
            </button>
            <button type="button" className="flex inline-flex p-2 hover:text-blue-400">
              <CiBookmark className="text-xl font-light mx-1"/>
            </button>
            <button
              type="button"
              className="p-2 hover:text-yellow-400"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
