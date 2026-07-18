import { FiImage } from "react-icons/fi";
import { useRef, useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import axios from "axios";
import { useUser } from "./UserContext";

export default function CreateTweet() {
  const { user } = useUser();
  const [Description, setDescription] = useState("");
  // const [PostImage, setPostImage] = useState();
  const [PostImagePreview, setPostImagePreview] = useState();
  const ProfileImage = localStorage.getItem("ProfileImage");
  const PostImageRef = useRef();
  const PostImagePreviewHandel = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPostImagePreview(url);
    // setPostImage(file);
  };
  const id = user.user_id
  const PostHandle = async () => {
    if (!Description.trim() && !PostImagePreview) return;
    try {
      // console.log(Description,PostImagePreview);
      
      await axios.post(`http://localhost:3000/tweets/${id}`, {
        description: Description,
        imagePath: PostImagePreview,
      });
      setDescription("");
      setPostImagePreview(null);
    } catch (error) {
      console.log(error, "error posting tweets");
    }
  };
  return (
    <div className="flex px-3 w-full h-full">
      <div className="shrink-0">
        <img
          src={ProfileImage || "https://placehold.co/60x60"}
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
        <img src={PostImagePreview} alt="" />

        <hr className="h-px bg-neutral-quaternary custom-border" />
        <div className="flex items-center my-2">
          {" "}
          <FiImage
            className="text-2xl text-gray-600 mr-2"
            onClick={() => {
              PostImageRef.current.click();
            }}
          />
          <input
            type="file"
            accept="image/*"
            ref={PostImageRef}
            onChange={PostImagePreviewHandel}
            className="hidden"
          />
          <FiImage className="text-2xl text-gray-600 mx-2" />
          <FaRegSmile className="text-2xl text-gray-600 mx-2" />
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
