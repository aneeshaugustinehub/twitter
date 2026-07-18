import { FiImage } from "react-icons/fi";
import { useRef, useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { useUser } from "./UserContext";
import { useTweets } from "../components/tweetsContext";

export default function CreateTweet() {
  const BASE_URL = "http://localhost:3000/profilesImage/";

  const { CreateTweet } = useTweets();
  const { user } = useUser();
  const [Description, setDescription] = useState("");
  const [PostImage, setPostImage] = useState();
  const [PostImagePreview, setPostImagePreview] = useState();
  const ProfileImage = user?.profilePic;
  const PostImageRef = useRef();
  const TweetImages = [];

  const PostImagePreviewHandel = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const newTweetImages = [...TweetImages, url];
    setPostImagePreview(newTweetImages);
    setPostImage(file);
  };
  const PostHandle = async () => {
    CreateTweet(Description, PostImage);
    setPostImagePreview(null);
  };
  return (
    <div className="flex px-3 w-full h-full">
      <div className="shrink-0">
        <img
          src={BASE_URL + ProfileImage}
          alt="img"
          className="rounded-full h-12 w-12 object-cover"
        />
      </div>

      <div className="block items-center w-full mx-2">
        <input
          className="border-none focus:outline-none focus:ring-0 w-full min-w-full bg-transparent text-xl py-4"
          type="text"
          placeholder="what's happening?"
          onChange={(e) => setDescription(e.target.value)}
        />
        <img
          src={PostImagePreview || null}
          alt=""
          className="max-h-80 object-cover"
        />

        <hr className="my-4 h-px bg-neutral-quaternary custom-border" />
        <div className="flex items-center my-2">
          {" "}
          <FiImage
            className="text-2xl text-gray-600 mr-2 cursor-pointer"
            onClick={() => {
              PostImageRef.current.click();
            }}
          />
          <input
            type="file"
            accept="image/*"
            ref={PostImageRef}
            encType="multipart/form-data"
            onChange={PostImagePreviewHandel}
            className="hidden"
          />
          {/* <FiImage className="text-2xl text-gray-600 mx-2" /> */}
          <FaRegSmile className="text-2xl text-gray-600 mx-2 cursor-pointer" />
          <button
            className="color-btn px-4 py-1 rounded-2xl ml-auto font-bold"
            onClick={PostHandle}
          >
            post
          </button>
        </div>
      </div>
    </div>
  );
}
