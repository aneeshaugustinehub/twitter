import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinToday() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/home");
  };
  useEffect(() => {
    const islogedin = localStorage.getItem("username");
    if (islogedin) {
      navigate("/home");
    }
  });
  return (
    <>
      <div className="signup w-full h-screen">
        <div className="grid grid-cols-2 justify-center items-center ">
          <div className="flex flex-col justify-center">
            <div className="my-10">
              <h1 className="text-6xl font-bold">Happening now.</h1>
            </div>
            <div className="signin w-[350px]">
              <input
                type="email"
                id="email"
                className="login-input"
                placeholder="Email or username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label type="email">Enter your email:</label>
              <button
                type="submit"
                className="btn-follow  px-0 p-0 rounded-2xl font-bold w-full mt-6"
                id="join-today-btn"
                onClick={() => setShowPopup(!showPopup)}
              >
                <span className="">Continue</span>
              </button>
              <div>
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
          </div>
          <div className="flex flex-col justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/960px-X_logo_2023.svg.png?_=20250120013756"
              alt=""
              className="h-80 w-80 bg-slate-50"
            />
          </div>
        </div>
        <div
          className={`${
            showPopup ? "block" : "hidden"
          } fixed inset-0 bg-black/50`}
        >
          <dialog className="flex color justify-center items-center p-16 rounded-xl my-auto">
            <div className="" id="login-popup">
            <button onClick={() => setShowPopup(!showPopup)}> x </button>
            <div className="my-10">
              <h1 className="text-2xl font-bold">Login</h1>
            </div>
            <div className="signin">
              <div>
                <input
                  type="email"
                  id="email"
                  className="login-input"
                  placeholder="Email or username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  id="password"
                  className="login-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="hidden">Please fill out this field.</span>
                <span className="mt-4">forgot password</span>
                <button
                  type="submit"
                  className="btn-follow rounded-full font-bold w-full h-full mt-6 py-4"
                  onClick={handleLogin}
                >
                  Continue
                </button>
              </div>
            </div>
            <div>
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
            </div></div>
          </dialog>
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
