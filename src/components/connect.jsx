import propic from "../assets/propic.jpg"


export default function Connect() {
  return (
    <>
      <div className="px-3 py-2 flex align-items-center justify-content-end Connect ">
        <img
          src={propic}
          alt="hugenerd"
          width="50"
          height="50"
          className="rounded-full"
        />
        <div className="px-2">
          <span className="fw-bold">username</span>
          <br />
          <span className="text-white-50 text-decoration-none">userid</span>
        </div>
        <button
          type="button"
          className="btn-follow"
        >
          Follow
        </button>
      </div>
    </>
  );
}
