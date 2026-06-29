import propic from "../assets/propic.jpg";
import { CiHeart } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { useUser } from "./UserContext";

export default function Tweets() {
  const { user } = useUser();
  const ProfileImage=localStorage.getItem("ProfileImage")


  return (
    <div className="custom-border px-3 pt-2">
      <div className="flex gap-3">
        <div className="shrink-0">
          <img
            src={ProfileImage}
            alt="img"
            width={40}
            height={40}
            className="rounded-full h-12 w-12 object-cover"
          />
        </div>

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
          {/* Username row */}
          <div className="flex justify-center">
            <a href="" className="font-bold ">
              {user.fullname}
            </a>
            <p className="font-light text-gray-500 mx-2">@{user.user_id}</p>
            <button
              // onClick={""}
              className="ml-auto rounded-full hover:bg-gray-800 hover:text-sky-400 px-2"
            >
              ...
            </button>
          </div>

          {/* Tweet text */}
          <p className="mt-1 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          {/* Image */}
          <div>
            <img
              className="rounded-2xl w-full"
              src="https://picsum.photos/300/200"
              alt="post image"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-between pt-2 ">
            <button type="button" className="p-2 hover:text-blue-400">
              <BiMessageRounded />
            </button>
            <button type="button" className="p-2 hover:text-red-400">
              <CiHeart />
            </button>
            <button type="button" className="p-2 hover:text-green-400">
              <BiRepost />
            </button>
            <button type="button" className="p-2 hover:text-blue-400">
              <CiBookmark />
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
