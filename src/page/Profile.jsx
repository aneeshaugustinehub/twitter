import { CiLocationOn } from "react-icons/ci";
// import Propic from "../assets/propic.jpg";
import { Link } from "react-router-dom";
import { useUser } from "../components/UserContext";
import Tweets from "../components/Tweets"

export default function Profile() {
const {user}=useUser()
const userData=user
const bannerImage=localStorage.getItem("BannerImage")
const ProfileImage=localStorage.getItem("ProfileImage")

// console.log(userData);


  return (
    <>
      <div className="flex flex-col md:w-[580px]">
        {/* Banner */}
        <img
          src={bannerImage ||  "https://placehold.co/240x240"}
          className="w-full h-48 md:h-60 object-cover"
          alt="banner"
          height=""
        />

        {/* Profile info */}
        <div className="border border-gray-700 p-3">
          <div className="flex flex-col">
            {/* Avatar + Edit button row */}
            <div className="flex justify-between items-start">
              <img
                src={ProfileImage || "https://placehold.co/60x60"}
                className="w-32 h-32 rounded-full border-4 border-white dark:border-black object-cover -mt-14 "
                alt="profile"
              />
              <Link to="/EditProfile" className="nav-link text-4xl">
                <button
                  type="button"
                  className="border dark:border-white border-black text-black dark:text-white text-sm font-bold px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
                >
                  Edit profile
                </button>
              </Link>
            </div>

            {/* Details */}
            <div className="pt-3">
              <h5 className="font-bold text-black dark:text-white text-lg m-0">{userData?.fullname}</h5>
              <p className="font-light text-gray-500">@{userData?.user_id}</p>
              <p className="text-black dark:text-white">{userData?.bio}</p>

              {/* Meta info */}
              <div className="text-gray-500 flex flex-wrap gap-2 text-sm">
                <span>💼 {userData?.tag}</span>
                <span><CiLocationOn />{userData?.location}</span>
                <span>
                  🔗
                  <a href={userData?.website} className="text-blue-400 hover:underline">{userData?.website}</a>
                </span>
                <span>🎈 Born {userData?.dob}</span>
                <span>📅 Joined {userData?.Joined}</span>
              </div>
              {/* Following / Followers */}
              <div className="flex gap-4 mt-2 text-sm text-black dark:text-white">
                <span>
                  <span className="font-bold">99</span>
                  <span className="text-gray-500">Following</span>
                </span>
                <span>
                  <span className="font-bold">15</span>
                  <span className="text-gray-500">Followers</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <Tweets/> */}
      </div>
    </>
  );
}
