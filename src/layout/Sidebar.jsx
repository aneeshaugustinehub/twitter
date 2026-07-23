import Connect from "../components/Connect";
import Happening from "../components/Happening";
import News from "../components/News";
import { useUser } from "../components/UserContext";

export default function Sidebar() {
  const { user } = useUser();
  // console.log(user);

  return (
    <div
      className={`${user ? `sidebar w-[400px] lg:block hidden`: `hidden`}`}
    >
      <News />
      <div className="border border-gray-800 my-2 mx-4 rounded-2xl">
      <Connect />
      </div>
      <Happening />
    </div>
  );
}
