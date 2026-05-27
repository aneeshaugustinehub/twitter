import islogedin from "@/components/auth";
export default function JoinToday() {
  return (
    <>
      <div className="row d-flex signup">
        <div className="col-auto col-lg-6 d-flex align-items-center justify-content-center">
          <i className="fs-4 bi-twitter"></i>
        </div>
        <div className="col-auto d-flex flex-column justify-content-center">
          <div className="signinhead">
            <h1>Happening now</h1>
            <h4>Join today.</h4>
          </div>

          <div className="signin">
            <hr className="hr" />
            <button
              type="button"
              className="btn btn-primary rounded-5 fw-bold loginbtn"
            >
              Create account
            </button>
            <p>
              By signing up, you agree to the <a href="">Terms of Service</a>{" "}
              and <a href=""> Privacy Policy</a>, including{" "}
              <a href="">Cookie Use.</a>
            </p>
            <h5>Already have an account?</h5>
            <a
              type="button"
              className="btn btn-outline-light rounded-5 fw-bold fs-6 loginbtn" href="/login"
            >
              Sign in
            </a>
          </div>
        </div>

        <footer className="mt-auto">
          <div className="ftrlinks p-2">
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
              <br />
              <a href="">© 2023 X Corp.</a>{" "}
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
