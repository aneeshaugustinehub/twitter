import Connect from "./connect";
import Happening from "./Happening";
import News from "./news";

export default function Sidebar() {
  return (
    <div className="sidebar w-[350px] hidden lg:block ">
      <News />
      <Connect />
      <Happening />
    </div>
  );
}
