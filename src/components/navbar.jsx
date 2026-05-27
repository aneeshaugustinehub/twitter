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

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-item">
          <a href="#" className="nav-link text-4xl">
            <IoLogoOctocat />
          </a>
        </div>
        <ul className="" id="menu">
          <li className="nav-item">
            <a href="#" className="nav-link ">
              <GoHome />
              <span className="nav-title">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              <IoSearch />
              <span className="nav-title">Explore</span>{" "}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              <MdNotificationsNone />{" "}
              <span className="nav-title">Notifications</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              <BsChat /> <span className="nav-title">Messages</span>{" "}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              <CiAirportSign1 /> <span className="nav-title">Gork</span>{" "}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              <FaRegBookmark />{" "}
              <span className="nav-title">Bookmarks</span>{" "}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              <FaRegBookmark />{" "}
              <span className="nav-title">Creator Studio</span>{" "}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              <i className=""></i>{" "}
              <span className="nav-title">Premium</span>{" "}
            </a>
          </li>
          <li className="nav-item ">
            <a href="/profile" className="nav-link">
              <CiUser />
              <span className="nav-title">Profile</span>{" "}
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <CiCircleMore />
              <span className="nav-title">More</span>{" "}
            </a>
          </li>
        </ul>
        <div className="hidden">
          <ul className="">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fs-4 bi-people"></i>{" "}
                <span className="nav-title">Communities</span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ">
                <i className=""></i>{" "}
                <span className="nav-title">list</span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link align-middle">
                <i className="fs-4 bi-twitter"></i>{" "}
                <span className="nav-title">Communities</span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link align-middle">
                <i className="fs-4 bi-twitter"></i>{" "}
                <span className="nav-title">Monetization</span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link align-middle">
                <i className="fs-4 bi-twitter"></i>{" "}
                <span className="nav-title">Pro</span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link align-middle">
                <i className="fs-4 bi-twitter"></i>{" "}
                <span className="nav-title">Ads</span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link align-middle">
                <i className="fs-4 bi-twitter"></i>{" "}
                <span className="nav-title">Settings and privacy</span>{" "}
              </a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="nav-item bg-white hover:bg-slate-200 text-gray-900 rounded-full px-20"
        >
          <span className="nav-title">Post</span>
          <i className=""></i>
        </button>
        <div className=" pt-6">
          <a
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
              <span className="text-xs text-gray-400">{"@aneeshaugusti12"}</span>
            </div>
          </a>
          <ul className="text-sm hidden">
            <li className="nav-item">
              <a className="dropdown-item" href="/JoinToday">
                Log out @aneeshaugusti12
              </a>
            </li>
            <li className="nav-item">
              <a className="dropdown-item" href="/JoinToday">
                Add an existing account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
