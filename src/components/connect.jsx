export default function Connect() {
  return (
    <>
      <div className="px-3 py-2 d-flex align-items-center justify-content-end Connect">
        <img
          src="https://github.com/mdo.png"
          alt="hugenerd"
          width="40"
          height="40"
          className="rounded-circle"
        />
        <div className="px-2">
          <span className="text-white fw-bold">username</span>
          <br />
          <span className="text-white-50 text-decoration-none">userid</span>
        </div>
        <button
          type="button"
          className="btn btn-light rounded-5 px-3 p-1 ms-auto"
        >
          Follow
        </button>
      </div>
    </>
  );
}
