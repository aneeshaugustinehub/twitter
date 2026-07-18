// import propic from "../assets/propic.jpg";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import { useTweets } from "./tweetsContext";

import { FiSearch, FiTrash2 } from "react-icons/fi";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  BiRepost,
  BiMessageRounded,
  BiBookmark,
  BiBookmarkMinus,
} from "react-icons/bi";
// import { HiOutlineShare } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
// import { RiVerifiedBadgeFill } from "react-icons/ri";
// import { MdOutlineBookmarkRemove } from "react-icons/md";

export default function Tweets({ tweet }) {
const BASE_URL = "http://localhost:3000/tweetsImage/";
  const { deleteMutation } = useTweets();
  const [TweetMenu, setTweetMenu] = useState(false);
  const likeHandle = () => {
    console.log("like");
  };
  // console.log(tweet._id);
  const handleDelete = () => {
    deleteMutation.mutateAsync(tweet._id);
  };

  return (
    <>
      <div className="custom-border px-3 pt-2">
        <div className="flex gap-3">
          <div className="shrink-0">
            <img
              src={tweet.postedBy}
              alt=""
              width={40}
              height={40}
              className="rounded-full h-12 w-12 object-cover"
            />
          </div>
          {/* 
{tweet.updatedAt}
*/}
          <dialog
            closedby="any"
            className={`color dark:bg-gray-900 bg-gray-200  m-auto px-2 rounded-lg ${TweetMenu ? "flex" : ""}`}
          >
            <ul className="mt-2 rounded-lg ">
              <li className="dropdown-item">
                <button
                  onClick={() => handleDelete(tweet._id)}
                  className="inline-block"
                >
                  {" "}
                  <FiTrash2 /> Delete
                </button>
              </li>
              {/* <li className="dropdown-item">Pin to your profile</li>
              <li className="dropdown-item">Highlight on your profile</li>
              <li className="dropdown-item">Add/remove from Lists</li>
              <li className="dropdown-item">Mute this conversation</li>
              <li className="dropdown-item">Change who can reply</li>
              <li className="dropdown-item">View post activity</li> */}
            </ul>
          </dialog>
          <div className="flex flex-col flex-1">
            {/* tweetname row */}
            <div className="flex justify-center">
              <a
                href={`/${tweet.postedBy}`}
                className="flex justify-center font-bold "
              >
                {tweet.postedBy}
                <p className="font-thin text-sm text-gray-500 mx-2">
                  @{tweet.postedBy}
                </p>{" "}
                <p className="font-thin text-sm text-gray-500">
                  {moment(tweet.createdAt).fromNow()}{" "}
                </p>
              </a>
              <button
                onClick={() => setTweetMenu(!TweetMenu)}
                className="ml-auto rounded-full hover:bg-gray-800 hover:text-sky-400 px-2"
              >
                <BsThreeDots />
              </button>
            </div>
            {/* Tweet text */}
            <p className="mt-1 font-thin">{tweet.description}</p>
            {/* Image */}
            <div>
              {tweet.imagePath && (
                <img
                  className="rounded-2xl w-full max-h-80 object-contain cursor-pointer"
                  src={BASE_URL+tweet.imagePath}
                  alt=""
                />
              )}
            </div>
            {/* Action buttons */}
            <div className="flex justify-between pt-2 ">
              <Link
                type="button"
                to={`/comment/${tweet._id}`}
                className="inline-flex p-2 hover:text-blue-400"
              >
                <BiMessageRounded className="text-xl font-light mx-1" />
                {tweet.commentCount}
              </Link>
              <button
                onClick={likeHandle}
                type="button"
                className="inline-flex p-2 hover:text-red-400"
              >
                <CiHeart className="text-xl font-light mx-1" />
                {tweet.likeCount}
              </button>
              <Link
                type="button"
                className="inline-flex p-2 hover:text-green-400"
              >
                <BiRepost className="text-xl font-light mx-1" />{" "}
                {tweet.retweetCount}
              </Link>
              <Link
                type="button"
                className="inline-flex p-2 hover:text-blue-400"
              >
                <BiBookmark className="text-xl font-light mx-1" />
              </Link>
              <Link type="button" className="p-2 hover:text-yellow-400"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
