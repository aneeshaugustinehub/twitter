import Tweets from "../components/Tweets";
import { useParams } from "react-router-dom";
import { useTweets } from "../components/tweetsContext";
import Loading from "../components/Loading";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { FiImage } from "react-icons/fi";
import { useRef, useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { useUser } from "../components/UserContext";
import TweetsAndReplay from "../components/TweetsAndReplay";

export default function Comment() {
  const { CreateReplay, TweetByID, useGetReplay } = useTweets();
  const { user } = useUser();
  const BASE_URL = import.meta.env.VITE_BASE_URL + "profilesImage/";
  const CommentImageRef = useRef();
  const [CommentImagePreview, setCommentImagePreview] = useState();
  const [CommentImage, setCommentImage] = useState();
  const [Comment, setComment] = useState("");
  const { id } = useParams();

  // const [tweet, setTweet] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getTweet = async () => {
  //     try {
  //       setIsLoading(true);
  //       const res = await TweetByID(id);
  //       setTweet(res);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getTweet();
  // }, [TweetByID, id]);

  const { data: tweets = [], isLoading, error } = TweetByID(id);
  const { data: replay = [] } = useGetReplay(id);
  const ImagePreviewHandle = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setCommentImagePreview(url);
    setCommentImage(file);
  };

  const CommentHandle = () => {
    if (!tweets._id) return;
    if (!Comment && !CommentImage) return;
    CreateReplay({
      tweetId: tweets._id,
      ReplayText: Comment,
      ReplayImage: CommentImage,
    });
    setComment("");
    setCommentImagePreview(null);
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!tweets) return <div>no post: </div>;
  // if(tweets.replayId){

  // }

  return (
    <>
      <div className="md:w-[580px]">
        <div className="inline-flex text-xl font-bold p-2 fixed bg-slate-950/70 md:w-[580px] custom-border">
          <Link to="/home">
            <GoArrowLeft />{" "}
          </Link>
          <h1 className="pl-6">Post</h1>
        </div>
        <div className="overflow-y-scroll">
          <div className="mt-9">
            <TweetsAndReplay key={tweets._id} tweet={tweets} />
          </div>
          <div className="flex px-3 py-4 w-full h-full custom-border">
            <div className="shrink-0">
              <img
                src={BASE_URL + user.profilePic}
                alt="img"
                className="rounded-full h-10 w-10 object-cover"
              />
            </div>
            <div className="block items-center w-full mx-2">
              <input
                className="border-none focus:outline-none focus:ring-0 w-full min-w-full bg-transparent text-xl py-4"
                type="text"
                value={Comment}
                placeholder="what's happening?"
                onChange={(e) => setComment(e.target.value)}
              />
              <img
                src={CommentImagePreview || null}
                alt=""
                className="max-h-80 object-cover"
              />

              <hr className="my-4 h-px bg-neutral-quaternary custom-border" />
              <div className="flex items-center my-2">
                {" "}
                <FiImage
                  className="text-2xl text-gray-600 mr-2 cursor-pointer"
                  onClick={() => {
                    CommentImageRef.current.click();
                  }}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={CommentImageRef}
                  encType="multipart/form-data"
                  onChange={ImagePreviewHandle}
                  className="hidden"
                />
                {/* <FiImage className="text-2xl text-gray-600 mx-2" /> */}
                <FaRegSmile className="text-2xl text-gray-600 mx-2 cursor-pointer" />
                <button
                  className="color-btn px-4 py-1 rounded-2xl ml-auto font-bold"
                  onClick={CommentHandle}
                >
                  post
                </button>
              </div>
            </div>
          </div>
        </div>
        {replay?.map((replay) => (
          <Tweets key={replay._id} tweet={replay} />
        ))}
      </div>
    </>
  );
}
