import { FiCamera } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";


import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import {useUser} from "../components/UserContext"

const readFileAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
 

export default function EditProfile() {
  const navigate = useNavigate()
  const {EditUserProfile,user} = useUser()
  const [Fullname,setFullname] =useState(user.fullname)
  const [Username,setUsername] =useState(user.username)
  const [Bio,setBio] =useState(user.bio)
  const [Location,setLocation] =useState(user.location)
  const [Website,setWebsite] =useState(user.website)
  const [Dob,setDob] =useState(user.dob)

  const [Banner, setBannerPreview] = useState(localStorage.getItem("savedBannerImage"));
  const [Profile, setProfile] = useState(localStorage.getItem("savedProfileImage"));
  const [ProfileImage, setProfileImage] = useState(null);
  const [BannerImage, setBannerImage] = useState(null);
  const [Status,setStatus] = useState("")
  const BannerRef = useRef();
  const ProfileRef = useRef();
 
  const updateProfile = async ()=>{
    if (! Username ||! Fullname || !Bio || !Location || !Website || !Dob){
      return
    }
    EditUserProfile(Username,Fullname, Bio, Location, Website, Dob)
  console.log(Status);
  if (BannerImage){
    const BannerImageBase64 = await readFileAsBase64(BannerImage)
    setBannerImage(BannerImageBase64);
      localStorage.setItem("BannerImage", BannerImageBase64);
    };
  if (ProfileImage){
    const ProfileImageBase64 = await readFileAsBase64(ProfileImage)
    setProfileImage(ProfileImageBase64);
      localStorage.setItem("ProfileImage", ProfileImageBase64);
    };

  navigate("/profile");
  }

  const handleBannerImage = (e) => {
    const file = e.target.files[0];
    if (!file){
      setStatus('Please select a file first.');
      return;
    }
    const url = URL.createObjectURL(file);
    setBannerPreview(url);
    setBannerImage(file)

  };
  const RemoveImage = () => {
    setBannerPreview("");
    setBannerImage("")

  };

  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    if (!file){
      setStatus('Please select a file first.');
      return;
    }
    setStatus('Please select a file first.');
    const url = URL.createObjectURL(file);
    setProfileImage(file)
    setProfile(url);
  };

  return (
    <div className="flex flex-col md:w-[600px] w-full rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Link
            aria-label="Close"
            className="text-black dark:text-white hover:bg-gray-800 rounded-full p-1"
            to="/profile"
          >
            <MdOutlineClose size={20} />
          </Link>
          <span className="font-semibold text-black dark:text-white">Edit profile</span>
        </div>
        <button 
        className="color-btn font-semibold text-sm px-4 py-1.5 rounded-full"
        onClick={() => updateProfile()}>
          Save
        </button>
      </div>

      <div className="relative h-36 bg-gray-700 ">
        <img
          src={Banner || "https://placehold.co/600x400"}
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <div
            aria-label="Edit banner photo"
            className="bg-black/60 rounded-full p-2 text-white"
          >
            <div>
              <input
                className="hidden"
                type="file"
                accept="image/*"
                ref={BannerRef}
                onChange={handleBannerImage}
              />
            </div>
            <FiCamera
              onClick={() => {
                BannerRef.current.click();
              }}
              size={18}
            />
          </div>
          <button
            aria-label="Remove banner photo"
            className="bg-black/60 rounded-full p-2 text-white"
          >
            <RxCross1 onClick={RemoveImage} size={18} />
          </button>
        </div>
              <div className="absolute">
        <div className="grid place-items-center h-24 w-24 -mt-10 z-1">
          <div className="border flex items-center justify-center col-start-1 row-start-1 h-24 w-24 rounded-full">
            <img
              src={Profile || "https://placehold.co/50x50"}
              alt="profile image"
              width="96px"
              height="96px"
              className="rounded-full object-cover flex items-center justify-center"
            />
          </div>
          <div
            className="flex items-center justify-center col-start-1 row-start-1 h-10 w-10 rounded-full bg-gray-900/55"
            aria-label="Edit profile photo"
          >
            <input
              className="hidden"
              type="file"
              accept="image/*"
              ref={ProfileRef}
              onChange={handleProfileImage}
            />
            <FiCamera
              onClick={() => {
                ProfileRef.current.click();
              }}
              size={16}
            />
          </div>
        </div>
      </div>

      </div>

      <div className="ml-40 mx-4 mt-3 flex items-center justify-between bg-gray-900 rounded-xl px-4 py-2.5">
        <div className=" flex items-center gap-2 text-gray-400 text-sm">
          <IoSparkles size={16} />
          Customize yourself in seconds
        </div>
        <span className="text-gray-500 text-xs">›</span>
      </div>
      <div className="flex flex-col px-4 pb-6 mt-2">
        <div className="border-b border-gray-800 py-3">
          <label className="text-xs text-gray-500 block mb-1">Name</label>
          <input
            type="text"
            value={Fullname}
            onChange={(e)=>{setFullname(e.target.value)}}
            className="w-full bg-gray-900 text-white text-sm outline-none"
          />
        </div>
        <div className="border-b border-gray-800 py-3">
          <label className="text-xs text-gray-500 block mb-1">Username</label>
          <input
            type="text"
            value={Username}
            onChange={(e)=>{setUsername(e.target.value)}}
            className="w-full bg-gray-900 text-white text-sm outline-none"
          />
        </div>
        <div className="border-b border-gray-800 py-3">
          <label className="text-xs text-gray-500 block mb-1">Bio</label>
          <textarea
            rows={3}
            value={Bio}
            onChange={(e) =>{setBio(e.target.value)}}
            className="w-full bg-gray-900 text-white text-sm outline-none resize-none placeholder-gray-600"
          />
        </div>
        <div className="py-3">
          <label className="text-xs text-gray-500 block mb-1">Location</label>
          <input
            type="text"
            value={Location}
            onChange={(e)=>{setLocation(e.target.value)}}
            className="w-full bg-gray-900 text-white text-sm outline-none placeholder-gray-600"
          />
        </div>
        <div className="py-3">
          <label className="text-xs text-gray-500 block mb-1">Website</label>
          <input
            type="text"
            value={Website}
            onChange={(e)=>{setWebsite(e.target.value)}}
            className="w-full bg-gray-900 text-white text-sm outline-none placeholder-gray-600"
          />
        </div>
        <div className="py-3">
          <label className="text-xs text-gray-500 block mb-1">dob</label>
          <input
            type="text"
            value={Dob}
            onChange={(e)=>{setDob(e.target.value)}}
            className="w-full bg-gray-900 text-white text-sm outline-none placeholder-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
