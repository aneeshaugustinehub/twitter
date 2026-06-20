import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { CiAirportSign1 } from "react-icons/ci";
import { IoLogoOctocat } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "./UserContext";

export default function NavBar() {
  const ProfileImage=localStorage.getItem("ProfileImage")

  const Navigate = useNavigate();
  const { logout, user } = useUser();
  const userdata = user;

  useEffect(() => {
    const more = document.getElementById("nav-more");
    more.addEventListener("click", () => {
      document.querySelector("dialog").show();
    });
    const acmenu = document.getElementById("nav-account");
    acmenu.addEventListener("click", () => {
      document.getElementById("account-menu").show();
    });
  });

  const handleLogout = () => {
    logout();
    Navigate("/");
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-item">
          <Link to="home" className="nav-link text-4xl">
            <IoLogoOctocat />
          </Link>
        </div>
        <ul className="" id="menu">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              <GoHome />
              <span className="nav-title">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/explore" className="nav-link ">
              <IoSearch />
              <span className="nav-title">Explore</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Notifications" className="nav-link ">
              <MdNotificationsNone />
              <span className="nav-title">Notifications</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chat" className="nav-link ">
              <BsChat /> <span className="nav-title">chat</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Gork" className="nav-link ">
              <CiAirportSign1 /> <span className="nav-title">Gork</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Bookmarks" className="nav-link ">
              <FaRegBookmark />
              <span className="nav-title">Bookmarks</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link  className="nav-link">
              <MdOutlineRocketLaunch />
              <span className="nav-title">Creator Studio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link">
              <CiAirportSign1 />
              <span className="nav-title">Premium</span>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/profile" className="nav-link ">
              <CiUser />
              <span className="nav-title">Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              id="nav-more"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <CiCircleMore />
              <span className="nav-title">More</span>
            </Link>
          </li>
        </ul>
        <dialog
          className="dropdown"
          closedby="any"
          id="nav-more-menu"
        >
          <ul className=" bottom-24 left-0 right-0 m-auto px-2 rounded-lg">
            <li className="dropdown-item">
              <Link to="" className="box-link ">
                <CiAirportSign1 />
                <span className="nav-title">Communities</span>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to="" className="box-link ">
                <CiAirportSign1 />
                <span className="nav-title">list</span>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to="" className="box-link ">
                <CiAirportSign1 />
                <span className="nav-title">Communities</span>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to="" className="box-link ">
                <CiAirportSign1 />
                <span className="nav-title">Monetization</span>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to="" className="box-link">
                <CiAirportSign1 />
                <span className="nav-title">Pro</span>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to="" className="box-link">
                <CiAirportSign1 />
                <span className="nav-title">Ads</span>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to="" className="box-link ">
                <CiAirportSign1 />
                <span className="nav-title">Settings and privacy</span>
              </Link>
            </li>
          </ul>
        </dialog>
        <div className="">
          <Link
            to="/home"
            className=""
          >
            <CiAirportSign1 className="rounded-full xl:hidden flex text-4xl  bg-gray-100 hover:bg-slate-200 text-gray-900" />
            <span className="color-btn rounded-full xl:py-3 xl:px-24 justify-center items-center xl:flex hidden font-black text-lg">Post</span>
          </Link>
        </div>
        <div className="py-2 cursor-pointer mt-auto" id="nav-account">
          <div
            className="inline-flex py-5"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={ProfileImage}
              alt={userdata.fullname}
              width="50"
              height="50"
              className="rounded-full h-12 w-12 object-cover"
            />
            <div className="username px-4 hidden xl:block">
              <span className="text-md font-bold ">{userdata.fullname}</span>{" "}
              <br />
              <span className="text-xs text-gray-600">{userdata.username}</span>
            </div>
          </div>
          <dialog
            className="dropdown"
            closedby="any"
            id="account-menu"
          >
            <button onClick={handleLogout} className="dropdown-item py-2 px-2 my-1 ">
              <div>Log out {userdata.username}</div>
            </button>
            <button className="dropdown-item py-2 px-2 my-1 ">
              <div className="">Add an existing account</div>
            </button>
          </dialog>
        </div>
      </div>
    </>
  );
}
