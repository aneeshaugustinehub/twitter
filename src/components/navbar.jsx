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
import { Link } from "react-router-dom";

export default function NavBar() {
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
            <Link to="" className="nav-link ">
              <GoHome />
              <span className="nav-title">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link ">
              <IoSearch />
              <span className="nav-title">Explore</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link ">
              <MdNotificationsNone />
              <span className="nav-title">Notifications</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link ">
              <BsChat /> <span className="nav-title">Messages</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link ">
              <CiAirportSign1 /> <span className="nav-title">Gork</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link ">
              <FaRegBookmark />
              <span className="nav-title">Bookmarks</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link ">
              <FaRegBookmark />
              <span className="nav-title">Creator Studio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link ">
              <CiAirportSign1 />
              <span className="nav-title">Premium</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/profile" className="nav-link ">
              <CiUser />
              <span className="nav-title">Profile</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <CiCircleMore />
              <span className="nav-title">More</span>
            </Link>
          </li>
        </ul>
        <div className="hidden">
          <ul className="">
            <li className="nav-item">
              <Link to="" className="nav-link ">
                <i className="fs-4 bi-people"></i>
                <span className="nav-title">Communities</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link ">
                <CiAirportSign1 />
                <span className="nav-title">list</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link ">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Communities</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link ">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Monetization</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link ">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Pro</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link ">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Ads</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link ">
                <i className="fs-4 bi-twitter"></i>
                <span className="nav-title">Settings and privacy</span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="nav-item bg-white hover:bg-slate-200 text-gray-900 rounded-full md:px-20">
          <CiAirportSign1 className="md:hidden flex"/>
          <span className="nav-title">Post</span>
        </div>
        <div className=" pt-6">
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
            <div className="username px-4 ">
              <span className="text-md font-bold">aneesh augustine</span> <br />
              <span className="text-xs text-gray-400">
                {"@aneeshaugusti12"}
              </span>
            </div>
          </Link>
          <ul className="text-sm hidden">
            <li className="nav-item">
              <Link className="dropdown-item" href="/JoinToday">
                Log out @aneeshaugusti12
              </Link>
            </li>
            <li className="nav-item">
              <Link className="dropdown-item" href="/JoinToday">
                Add an existing account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
