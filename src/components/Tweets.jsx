// import { HiOutlineShare } from "react-icons/hi2";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { RiVerifiedBadgeFill } from "react-icons/ri";
// import { MdOutlineBookmarkRemove } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import {useState } from "react";
import moment from "moment";
import { useTweets } from "./tweetsContext";
import { FiTrash2 } from "react-icons/fi";
import { BiRepost, BiMessageRounded, BiBookmark } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { useUser } from "./UserContext";

export default function Tweets({ tweet }) {
  const TWEET_IMAGE_URL = import.meta.env.VITE_BASE_URL + "tweetsImage/";
  const BASE_URL = import.meta.env.VITE_BASE_URL + "profilesImage/";
  const { user, GetPostUser } = useUser();
  const { deleteMutation } = useTweets();
  const [TweetMenu, setTweetMenu] = useState(false);

  // useEffect(() => {
  //   const handlePostUser = async (id) => {
  //     const res = await GetPostUser(id);
  //     setTweetUser(res);
  //   };
  //   handlePostUser(tweet.postedBy);
  // }, [tweet, GetPostUser]);

  const { data: tweetUser = [],} = GetPostUser(tweet.postedBy);

  const handleDelete = () => {
    deleteMutation.mutateAsync(tweet._id);
  };
  const profileAction = (value, id) => {
    console.log(value, id);
  };

  const likeHandle = () => {
    console.log("like");
  };

  return (
    <>
      <div className="custom-border px-3 pt-2">
        <div className="flex gap-3">
          <div className="shrink-0">
            <img
              src={BASE_URL + tweetUser?.profilePic}
              alt=""
              width={30}
              height={30}
              className="rounded-full h-10 w-10 object-cover"
            />
          </div>
          <dialog
            closedby="any"
            className={`color dark:bg-gray-900 bg-gray-200  m-auto px-2 rounded-lg ${TweetMenu ? "flex" : ""}`}
          >
            {tweetUser?._id === user._id ? (
              <ul className="mt-2 rounded-lg">
                <li className="dropdown-item inline-flex ">
                  <button
                    onClick={() => handleDelete(tweet._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 />
                    Delete
                  </button>
                </li>
                <li className="dropdown-item">
                  {" "}
                  <button
                    onClick={() => handleDelete(tweet._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 />
                    Pin to your profile{" "}
                  </button>
                </li>
                <li className="dropdown-item">
                  {" "}
                  <button
                    onClick={() => handleDelete(tweet._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 />
                    Highlight on your profile{" "}
                  </button>
                </li>
                <li className="dropdown-item">
                  {" "}
                  <button
                    onClick={() => handleDelete(tweet._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 />
                    Add/remove from Lists{" "}
                  </button>
                </li>
                <li className="dropdown-item">
                  {" "}
                  <button
                    onClick={() => handleDelete(tweet._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 />
                    Mute this conversation{" "}
                  </button>
                </li>
                <li className="dropdown-item">
                  {" "}
                  <button
                    onClick={() => handleDelete(tweet._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 />
                    Change who can reply{" "}
                  </button>
                </li>
                <li className="dropdown-item">
                  {" "}
                  <button
                    onClick={() => handleDelete(tweet._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 />
                    View post activity{" "}
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="mt-2 rounded-lg ">
                <li className="dropdown-item inline-flex ">
                  <button
                    onClick={() => profileAction("Unfollow", tweetUser?._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 /> Unfollow @{tweetUser?.name}
                  </button>
                </li>
                <li className="dropdown-item">
                  <button
                    onClick={() => profileAction("Unfollow", tweetUser?._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 />
                    Add/remove from Lists
                  </button>
                </li>
                <li className="dropdown-item">
                  <button
                    onClick={() => profileAction("Mute", tweetUser?._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 /> Mute @{tweetUser?.name}
                  </button>
                </li>
                <li className="dropdown-item">
                  <button
                    onClick={() => profileAction("Block", tweetUser?._id)}
                    className="inline-flex p-2 hover:bg-slate-700 rounded-lg w-full"
                  >
                    <FiTrash2 /> Block @{tweetUser?.name}
                  </button>
                </li>
              </ul>
            )}
          </dialog>
          <div className="flex flex-col flex-1">
            {/* tweetName row */}
            <div className="flex justify-center">
              <Link
                to={`/${tweetUser?.userId}`}
                className="flex justify-center font-bold "
              >
                {tweetUser?.name}
                <p className="font-thin text-sm text-gray-500 mx-2">
                  @{tweetUser?.userId}
                </p>{" "}
                <p className="font-thin text-sm text-gray-500">
                  {moment(tweet.createdAt).fromNow()}{" "}
                </p>
              </Link>
              <button
                onClick={() => setTweetMenu(!TweetMenu)}
                className="ml-auto rounded-full hover:bg-gray-800 hover:text-sky-400 px-2"
              >
                <BsThreeDots />
              </button>
            </div>
            <Link to={`/comment/${tweet._id}`}>
              {/* Tweet text */}
              <p className="mt-1 font-thin pb-2 text-[15px]">
                {tweet.description}
              </p>
              {/* Image */}
              <div>
                {tweet.imagePath && (
                  <img
                    className="rounded-2xl w-full max-h-[500px] object-contain cursor-pointer"
                    src={TWEET_IMAGE_URL + tweet.imagePath}
                    alt=""
                  />
                )}
              </div>
            </Link>
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
