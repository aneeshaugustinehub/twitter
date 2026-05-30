import Propic from "../assets/propic.jpg";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col md:w-[600px]">
        {/* Banner */}
        <img
          src="https://pbs.twimg.com/profile_banners/11348282/1775567134/1080x360"
          className="w-full"
          alt="banner"
        />

        {/* Profile info */}
        <div className="border border-gray-700 p-3">
          <div className="flex flex-col">
            {/* Avatar + Edit button row */}
            <div className="flex justify-between items-start">
              <img
                src={Propic}
                className="w-16 h-16 rounded-full -mt-8 border-2 border-black"
                alt="profile"
              />
              <Link to="/EditProfile" className="nav-link text-4xl">
                <button
                  type="button"
                  className="border border-white text-white text-sm font-bold px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
                >
                  Edit profile
                </button>
              </Link>
            </div>

            {/* Details */}
            <div className="pt-3">
              <h5 className="font-bold text-white text-lg m-0">full name</h5>
              <p className="font-light text-gray-500">@username</p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              {/* Meta info */}
              <div className="text-gray-500 flex flex-wrap gap-2 text-sm">
                <span>💼 Photographer</span>
                <span>📍 Kasargod, Kerala, India</span>
                <span>
                  🔗
                  <a href="" className="text-blue-400 hover:underline">
                    linktr.ee/angeeg
                  </a>
                </span>
                <span>🎈 Born June 3, 1999</span>
                <span>📅 Joined January 2017</span>
              </div>
              {/* Following / Followers */}
              <div className="flex gap-4 mt-2 text-sm text-white">
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
      </div>
    </>
  );
}
