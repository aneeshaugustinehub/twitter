import { useState } from "react";
import { useUser } from "../components/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function JoinToday() {
  const navigate = useNavigate();
  const [loginPopup, setloginPopup] = useState(false);
  const [SignupPopup, setSignupPopup] = useState(false);
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const { Login, Signup } = useUser();

  const handleSignup = () => {
    if (!user_id || !password || !Fullname) return console.log("invalid data");
    Signup(Email, Fullname, user_id, password,birthday);    
    setSignupPopup(false);
  };

  const handleLogin = () => {
    if (!user_id || !password) return;
    Login(user_id, password);
    setloginPopup(false);
    //console.log("loggedin");
    navigate("/home");
  };

  return (
    <>
      <div className="flex flex-col">
        <section className="grid lg:grid-cols-2 grid-cols-1 mt-20 ">
          <div className="flex flex-col  justify-center items-center lg:my-0 my-10 lg:order-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/960px-X_logo_2023.svg.png?_=20250120013756"
              alt=""
              className="lg:h-[400px] h-24"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:order-1">
            <div className="flex flex-col ">
              <h1 className="xl:text-6xl text-5xl font-bold p-0 my-2">
                Happening now.
              </h1>
              <button
                type="submit"
                className="btn-join"
                id="join-today-btn"
                onClick={() => setSignupPopup(!SignupPopup)}
              >
                <span className="">Signup</span>
              </button>
              <input
                type="email"
                id="email"
                className="input-join"
                placeholder="Email or username"
                value={user_id}
                onChange={(e) => setUser_id(e.target.value)}
              />
              <label type="email" className="my-3">
                Enter your email:
              </label>
              <button
                type="submit"
                className="btn-join"
                id="join-today-btn"
                onClick={() => setloginPopup(!loginPopup)}
              >
                <span className="">Continue</span>
              </button>
              <div className="mt-3">
                <p className="text-xs text-gray-500 mt-5">
                  By signing up, you agree to the{" "}
                  <a href="" className="color">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="" className="color">
                    {" "}
                    Privacy Policy
                  </a>
                  , including <br /> <a href="">Cookie Use.</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            className={`${
              loginPopup ? "block" : "hidden"
            } fixed inset-0 bg-black/50`}
          >
            <dialog className="flex color justify-center items-center p-16 rounded-xl my-auto">
              <div className="" id="login-popup">
                <button
                  className="p-2 px-4 bg-slate-900 rounded-full"
                  onClick={() => setloginPopup(!loginPopup)}
                >
                  {" "}
                  x{" "}
                </button>
                <div className="my-10">
                  <h1 className="text-2xl font-bold">Login</h1>
                </div>
                <div className="">
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="input-join"
                      placeholder="Email or username"
                      value={user_id}
                      onChange={(e) => setUser_id(e.target.value)}
                    />
                    <input
                      type="password"
                      id="password"
                      className="input-join"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="hidden">Please fill out this field.</span>
                    <span className="my-2 text-sm">Forgot password</span>
                    <button
                      type="submit"
                      className="btn-join"
                      onClick={handleLogin}
                    >
                      Continue
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mt-5">
                    By signing up, you agree to the{" "}
                    <a href="" className="text-black dark:text-white">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="" className="text-black dark:text-white">
                      {" "}
                      Privacy Policy
                    </a>
                    , including <br /> <a href="">Cookie Use.</a>
                  </p>
                </div>
              </div>
            </dialog>
          </div>
          <div
            className={`${SignupPopup ? "block" : "hidden"} fixed inset-0 bg-black/50`}
          >
            <dialog className="flex color justify-center items-center p-16 rounded-xl my-auto">
              <div className="">
                <button
                  className="p-2 px-4 bg-slate-900 rounded-full"
                  onClick={() => setSignupPopup(!SignupPopup)}
                >
                  {" "}
                  x{" "}
                </button>
                <div className="my-10">
                  <h1 className="text-2xl font-bold">Signup</h1>
                </div>
                <div className="signin">
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="input-join"
                      placeholder="Email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="Fullname"
                      id="Fullname"
                      className="input-join"
                      placeholder="Fullname"
                      value={Fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                    <input
                      type="username"
                      id="username"
                      className="input-join"
                      placeholder="username"
                      value={user_id}
                      onChange={(e) => setUser_id(e.target.value)}
                    />
                    <input
                      type="password"
                      id="password"
                      className="input-join"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      id="dob-label"
                      for="birthday"
                      class="block text-sm font-medium mb-1"
                    >
                      Date of Birth
                    </label>
                    <div class="relative">
                      <input
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        type="date"
                        id="birthday"
                        name="birthday"
                        max="2008-07-11"
                        class="color block w-full rounded-lg border  px-4 py-2.5 text-sm focus:outline-none aria-labelledby='dob-label'"
                      />
                    </div>

                    <span className="hidden">Please fill out this field.</span>
                    <Link to="" className="mt-4">
                      forgot password
                    </Link>
                    <button
                      type="submit"
                      className="btn-join"
                      onClick={handleSignup}
                    >
                      Continue
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mt-5">
                    By signing up, you agree to the{" "}
                    <a href="" className="text-black dark:text-white">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="" className="text-black dark:text-white">
                      {" "}
                      Privacy Policy
                    </a>
                    , including <br /> <a href="">Cookie Use.</a>
                  </p>
                </div>
              </div>
            </dialog>
          </div>
        </section>
        <footer className="flex justify-center mt-auto px-2 py-5">
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
