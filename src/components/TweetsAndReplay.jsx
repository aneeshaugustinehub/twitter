// import { HiOutlineShare } from "react-icons/hi2";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { RiVerifiedBadgeFill } from "react-icons/ri";
// import { MdOutlineBookmarkRemove } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTweets } from "./tweetsContext";
import { FiTrash2 } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { useUser } from "./UserContext";
import Loading from "./Loading";
import { TweetProfile,TweetImage, ActionBtn } from "./Tweets";

export default function TweetsAndReplay({ tweet }) {
  const { user, GetUserById } = useUser();
  const { deleteMutation } = useTweets();
  const [TweetMenu, setTweetMenu] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { data: tweetUser = [] } = GetUserById(tweet.postedBy);

  const handleDelete = () => {
    deleteMutation.mutateAsync(tweet._id);
  };
  const profileAction = (value, id) => {
    console.log(value, id);
  };

  return (
    <>
      <div className="custom-border pt-2">
        <div className="flex gap-3">
          <div className="shrink-0"></div>
          {TweetMenu && (
            <div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
              onClick={() => setTweetMenu(false)}
            >
              <dialog
                closedby="any"
                className={`color dark:bg-gray-900 bg-gray-200  m-auto rounded-lg flex`}
              >
                {tweetUser?._id === user._id ? (
                  <ul className="rounded-lg">
                    <li className="dropdown-item inline-flex ">
                      <button
                        onClick={() => setShowConfirm(true)}
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold text-red-600"
                      >
                        <FiTrash2 className="mr-3 text-xl" />
                        Delete
                      </button>
                    </li>
                    <li className="dropdown-item">
                      {" "}
                      <button
                        onClick={() => setShowConfirm(true)}
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" />
                        Pin to your profile{" "}
                      </button>
                    </li>
                    <li className="dropdown-item">
                      {" "}
                      <button
                        onClick={() => setShowConfirm(true)}
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" />
                        Highlight on your profile{" "}
                      </button>
                    </li>
                    <li className="dropdown-item">
                      {" "}
                      <button
                        onClick={() => setShowConfirm(true)}
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" />
                        Add/remove from Lists{" "}
                      </button>
                    </li>
                    <li className="dropdown-item">
                      {" "}
                      <button
                        onClick={() => setShowConfirm(true)}
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" />
                        Mute this conversation{" "}
                      </button>
                    </li>
                    <li className="dropdown-item">
                      {" "}
                      <button
                        onClick={() => setShowConfirm(true)}
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" />
                        Change who can reply{" "}
                      </button>
                    </li>
                    <li className="dropdown-item">
                      {" "}
                      <button
                        onClick={() => setShowConfirm(true)}
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" />
                        View post activity{" "}
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="mt-2 rounded-lg ">
                    <li className="dropdown-item inline-flex ">
                      <button
                        onClick={() =>
                          profileAction("Unfollow", tweetUser?._id)
                        }
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" /> Unfollow @
                        {tweetUser?.name}
                      </button>
                    </li>
                    <li className="dropdown-item">
                      <button
                        onClick={() =>
                          profileAction("Unfollow", tweetUser?._id)
                        }
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" />
                        Add/remove from Lists
                      </button>
                    </li>
                    <li className="dropdown-item">
                      <button
                        onClick={() => profileAction("Mute", tweetUser?._id)}
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" /> Mute @
                        {tweetUser?.name}
                      </button>
                    </li>
                    <li className="dropdown-item">
                      <button
                        onClick={() => profileAction("Block", tweetUser?._id)}
                        className="p-3 inline-flex hover:bg-slate-700 w-full font-bold"
                      >
                        <FiTrash2 className="mr-3 text-xl" /> Block @
                        {tweetUser?.name}
                      </button>
                    </li>
                  </ul>
                )}
              </dialog>
            </div>
          )}
          <div className="flex flex-col flex-1">
            {/* tweetName row */}
            <div className="flex justify-center align-top py-2 mr-4">
              <TweetProfile key={tweet._id} tweet={tweet} />
              <div
                onClick={() => setTweetMenu(!TweetMenu)}
                className="ml-auto rounded-full hover:bg-gray-800 hover:text-sky-400 justify-start"
              >
                <BsThreeDots />
              </div>
            </div>
            {/* Tweet content */}
            <div className="ml-12 -mt-5">
              <Link to={`/comment/${tweet._id}`}>
                <p className="mt-1 font-thin pb-2 text-[15px]">
                  {tweet.description}
                </p>
              </Link>
              <TweetImage key={tweet._id} tweets={tweet} />
            </div>
            {tweet.replayId && (
              <div>
                {" "}
                <Replay key={tweet.replayId} Replay={tweet} />{" "}
              </div>
            )}
            {/* Action buttons */}
            <div className="ml-12">
            <ActionBtn key={tweet.replayId} tweets={tweet} tweetUserID={tweetUser._id}/>
            </div>
          </div>
        </div>
      </div>
      {showConfirm && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setShowConfirm(false)}
        >
          <div
            className="bg-black border border-gray-700 rounded-2xl p-6 w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-black dark:text-white mb-2">
              Delete post?
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              This can’t be undone and it will be removed from your profile, the
              timeline of any accounts that follow you, and from search results.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleDelete(tweet._id)}
                className="w-full py-3 bg-red-500 hover:bg-red-400 text-black dark:text-white font-semibold rounded-full transition-colors text-sm"
              >
                Delete
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full py-3 border border-gray-600 dark:hover:bg-gray-900 hover:bg-gray-200 text-black dark:text-white font-semibold rounded-full transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Replay({ Replay }) {
  const { TweetByID } = useTweets();
  const { data: tweets = [], isLoading, error } = TweetByID(Replay.replayId);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!tweets) return <div>no post: </div>;

  return (
    <>
      <div className=" border-gray-800 border rounded-xl p-4 m-4 ml-12">
        <div className="flex align-top">
          <TweetProfile key={tweets._id} tweet={tweets} />
          
          {/* Tweet content */}
        </div>
        <div className="">
          <Link to={`/comment/${tweets._id}`}>
            <p className="mt-1 font-thin pb-2 text-[15px]">
              {tweets.description}
            </p>
          </Link>
          {!Replay.imagePath && (
            <div>
              {tweets.imagePath && (
                <TweetImage key={tweets._id} tweets={tweets} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
