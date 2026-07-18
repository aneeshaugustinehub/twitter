import Connect from "../components/Connect";
import Happening from "../components/Happening";
import News from "../components/News";

export default function Sidebar() {
  return (
    <div className="sidebar w-[350px] hidden lg:block ">
      <News />
      <Connect />
      <Happening />
    </div>
  );
}
