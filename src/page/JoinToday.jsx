import { Link } from "react-router-dom";

export default function JoinToday() {
  return (
    <>
      <div className="signup w-full h-screen">
        <div className="grid grid-cols-2 justify-center items-center ">
          <div className="flex flex-col justify-center">
            <div className="my-10">
              <h1 className="text-6xl font-bold">Happening now.</h1>
            </div>
            <div className="signin w-[350px]">
              <div>
                <input
                  type="email"
                  id="email"
                  class="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border-0 rounded-2xl shadow-sm focus:ring-1 focus:ring-blue-500 text-sm"
                  placeholder="Email or username"
                />
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn-follow  px-0 p-0 rounded-2xl fw-bold w-full mt-6"
                >
                  <Link to="/login" className="block w-full h-full px-4 py-2">
                    <span className="">Continue</span>
                  </Link>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-5">
                By signing up, you agree to the{" "}
                <a href="" className="text-gray-200">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="" className="text-gray-200">
                  {" "}
                  Privacy Policy
                </a>
                , including <br /> <a href="">Cookie Use.</a>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/960px-X_logo_2023.svg.png?_=20250120013756"
              alt=""
              className="h-80 w-80 bg-slate-50"
            />
          </div>
        </div>
        <footer className="mt-auto">
          <div className="footer-links p-2 text-xs text-gray-600 flex-row justify-center text-center">
            <span className="p-1">
              <a href="">About</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Download the X app </a>
            </span>
            <span className="p-1">
              <a href="">Help Center </a>{" "}
            </span>
            <span className="p-1">
              <a href="">Terms of Service </a>{" "}
            </span>
            <span className="p-1">
              <a href="">Privacy Policy </a>{" "}
            </span>
            <span className="p-1">
              <a href="">Cookie Policy </a>{" "}
            </span>
            <span className="p-1">
              <a href="">Accessibility </a>{" "}
            </span>
            <span className="p-1">
              <a href="">Ads info</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Blog</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Status</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Careers</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Brand Resources</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Advertising</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Marketing</a>{" "}
            </span>
            <span className="p-1">
              <a href="">X for Business</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Developers</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Directory</a>{" "}
            </span>
            <span className="p-1">
              <a href="">Settings</a>{" "}
            </span>
            <span className="p-1">
              <a href="">© 2023 X Corp.</a>{" "}
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
