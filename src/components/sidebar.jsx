import Connect from "./connect";
import Happening from "./Happening";
import News from "./news";
export default function Sidebar() {
  return (
    <div>
      <div className="sidebar p-2 ">
        <div className="color rounded-4 p-3 my-2">
          <p className="fw-bold h5  color">Today’s News</p>
          <div className=" color">
            <News />
            <News />
          </div>
        </div>
        <div className="color rounded-4 p-3 my-2">
          <p className="fw-bold h5 color">Who to follow</p>
          <Connect />
          <Connect />
          <Connect />
        </div>
        <div className="color rounded-4 p-3 my-2">
          <p className="fw-bold h5 color">What’s happening</p>
          <Happening/>
          <Happening/>
          <Happening/>
        </div>
      </div>
    </div>
  );
}
