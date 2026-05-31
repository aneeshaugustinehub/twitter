import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password",password)
    navigate("/home");
  };
  useEffect(() => {
    const islogedin = localStorage.getItem("username");
    if (islogedin) {
      navigate("/home");
    }
  });

  return (
    <dialog className="flex flex-col justify-center">
      <div className="my-10">
        <h1 className="text-6xl font-bold">Login</h1>
      </div>
      <div className="signin">
        <div>
          <input
            type="email"
            id="email"
            className="login-input"
            placeholder="Email or username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
          <input
            type="email"
            id="email"
            className="login-input"
            placeholder="Password"
            value={username}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <span className="hidden">Please fill out this field.</span>
          <span className="mt-4">forgot password</span>
        </div>
        <div className="">
          <button
            type="button"
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
      </div>
    </dialog>
  );
}
