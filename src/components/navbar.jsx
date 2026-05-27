//import propic from "src/assets/propic.jpg"
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { CiAirportSign1 } from "react-icons/ci";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
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
          <li className="nav-item ">
            <a href="/profile" className="nav-link">
              <CiUser />
              <span className="nav-title">Profile</span>{" "}
            </a>
          </li>
        </ul>
        <div className="hidden">
          <a
            href="#"
            className="nav-link dropdown-toggle rounded-5 ps-3 p-2 "
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <CiCircleMore />
            <span className="nav-title">More</span>{" "}
          </a>
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
                <span className="nav-title">Premium</span>{" "}
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
        <button type="button" className="">
          <span className="nav-title">Post</span>
          <i className=""></i>
        </button>
        <div className="">
          <a
            href="#"
            className=""
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="{propic}"
              alt="profile image"
              width="40"
              height="40"
              className="rounded-circle"
            />
            <div className="username">
              <span className="d-none d-lg-inline mx-1 px-2nav-title">
                profile Name
              </span>{" "}
              <br />
              <span className="d-none d-lg-block mx-1 px-2 fw-light">
                {" "}
                userid
              </span>
            </div>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li className="nav-item">
              <a className="dropdown-item" href="/JoinToday">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
