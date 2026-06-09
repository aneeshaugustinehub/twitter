import propic from "../assets/propic.jpg";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { CiAirportSign1 } from "react-icons/ci";
import { IoLogoOctocat } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { useUser } from "./UserContext";


export default function NavBar() {
  const Navigate = useNavigate();
  const {logout, user} = useUser()
  const userdata =user
  
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
    logout()
    Navigate("/")
  }

  return (
    <>
      <div className="navbar">
        <div className="nav-item">
          <Link to="" className="nav-link text-4xl">
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
          <li className="nav-item">
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
          </li>
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
          className="color bg-gray-900 bottom-24 left-0 right-0 m-auto px-2 rounded-lg"
          closedby="any"
          id="nav-more-menu"
        >
          <ul className="">
            <li className="nav-item">
              <Link to="" className="box-link ">
                <i className="fs-4 bi-people"></i>
                <span className="nav-title">Communities</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="box-link ">
                <CiAirportSign1 />
                <span className="nav-title">list</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="box-link ">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Communities</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="box-link ">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Monetization</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="box-link">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Pro</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="box-link">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Ads</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="box-link ">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Settings and privacy</span>
              </Link>
            </li>
          </ul>
        </dialog>
        <div className="">
          <Link to="/home" className="rounded-full xl:py-3 xl:px-24 flex justify-center items-center bg-gray-100 hover:bg-slate-200 text-gray-900">
              <CiAirportSign1 className="xl:hidden flex text-4xl" />
              <span className="xl:flex hidden font-black text-lg">Post</span>
            </Link>
        </div>
        <div className="pt-6 cursor-pointer" id="nav-account">
          <Link
            href="#"
            className="inline-flex"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={propic}
              alt="profile image"
              width="50"
              height="50"
              className="rounded-full"
            />
            <div className="username px-4 hidden xl:block" >
              <span className="text-md font-bold">{userdata.fullname}</span> <br />
              <span className="text-xs text-gray-400">
                {userdata.username}
              </span>
            </div>
          </Link>
          <dialog
            className="color bg-gray-900 bottom-24 left-0 right-0 m-auto px-2 rounded-lg"
            closedby="any"
            id="account-menu"
          >
            <button onClick={handleLogout} className="account-link">
              <div className="dropdown-item">Log out @aneeshaugusti12</div>
            </button>
            <button className="account-link">
              <div className="dropdown-item">Add an existing account</div>
            </button>
          </dialog>
        </div>
      </div>
    </>
  );
}
