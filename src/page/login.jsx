
export default function login() {
  return (
    <div className="flex flex-col justify-center">
      <div className="my-10">
        <h1 className="text-6xl font-bold">Login</h1>
      </div>
      <div className="signin">
        <div>
          <input
            type="email"
            id="email"
            class="mt-1 block w-full px-3 py-2 bg-white border text-gray-900 border-gray-300 rounded-2xl shadow-sm focus:ring-1 focus:ring-blue-500 text-sm"
            placeholder="Email or username"
          />
        </div>
        <div className="">
          <button
            type="button"
            className="btn-follow rounded-2xl fw-bold w-full mt-6"
            onClick={login}
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
    </div>
  );
}