import { FiCamera } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EditProfile() {
  return (
    <div className="flex flex-col md:w-[600px] w-full bg-black rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Link
            aria-label="Close"
            className="text-white hover:bg-gray-800 rounded-full p-1"
            to="/profile"
          >
            <MdOutlineClose size={20} />
          </Link>
          <span className="font-semibold text-white">Edit profile</span>
        </div>
        <button className="bg-white text-black font-semibold text-sm px-4 py-1.5 rounded-full hover:bg-gray-200">
          Save
        </button>
      </div>

      {/* Banner */}
      <div className="relative h-36 bg-gray-700">
        <img
          src="https://pbs.twimg.com/profile_banners/11348282/1775567134/1080x360"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <button
            aria-label="Edit banner photo"
            className="bg-black/60 rounded-full p-2 text-white"
          >
            <FiCamera size={18} />
          </button>
          <button
            aria-label="Remove banner photo"
            className="bg-black/60 rounded-full p-2 text-white"
          >
            <RxCross1 size={18} />
          </button>
        </div>
      </div>

      {/* Avatar */}
      <div className="px-4 relative">
        <div className="relative inline-block -mt-9">
          <div className="w-16 h-16 rounded-full bg-teal-600 border-4 border-black flex items-center justify-center text-white text-xl font-semibold">
            <img
              src="https://pbs.twimg.com/profile_banners/11348282/1775567134/1080x360"
              alt="profile image"
              width="50"
              height="50"
              className="rounded-full"
            />
          </div>
          <button
            aria-label="Edit profile photo"
            className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center text-white"
          >
            <FiCamera size={16} />
          </button>
        </div>
      </div>

      {/* Customize banner */}
      <div className="mx-4 mt-3 flex items-center justify-between bg-gray-900 rounded-xl px-4 py-2.5">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <IoSparkles size={16} />
          Customize yourself in seconds
        </div>
        <span className="text-gray-500 text-xs">›</span>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col px-4 pb-6 mt-2">
        <div className="border-b border-gray-800 py-3">
          <label className="text-xs text-gray-500 block mb-1">Name</label>
          <input
            type="text"
            defaultValue="Alex"
            className="w-full bg-transparent text-white text-sm outline-none"
          />
        </div>
        <div className="border-b border-gray-800 py-3">
          <label className="text-xs text-gray-500 block mb-1">Bio</label>
          <textarea
            rows={3}
            placeholder="Tell us about yourself"
            className="w-full bg-transparent text-white text-sm outline-none resize-none placeholder-gray-600"
          />
        </div>
        <div className="py-3">
          <label className="text-xs text-gray-500 block mb-1">Location</label>
          <input
            type="text"
            placeholder="Add your location"
            className="w-full bg-transparent text-white text-sm outline-none placeholder-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
