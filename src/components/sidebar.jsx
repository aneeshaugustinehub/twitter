import Connect from "./connect";
import Happening from "./Happening";
import News from "./news";


export default function Sidebar() {
  return (
      <div className="sidebar p-2 px-6 w-[350px] hidden lg:block">
        <div className="rounded-xl my-6 p-3 custom-border">
          <p className="font-bold text-lg py-1 pb-2 ">Today’s News</p>
          <div className="">
            <News />
            <News />
            <News />
          </div>
        </div>
        <div className="rounded-xl my-6 p-3 custom-border">
          <p className="font-bold text-lg py-1 pb-2 ">You might like</p>
          <Connect />
          <Connect />
          <Connect />
        </div>
        <div className="rounded-xl my-6 p-3 custom-border">
          <p className="font-bold text-lg py-1 pb-2 ">What’s happening</p>
          <Happening/>
          <Happening/>
          <Happening/>
        </div>
      </div>
  );
}
