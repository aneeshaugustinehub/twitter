import Connect from "../components/Connect";
import Happening from "../components/Happening";
import News from "../components/News";
import { useUser } from "../components/UserContext";

export default function Sidebar() {
  const { user } = useUser();
  console.log(user);

  return (
    <div
      className={`${user ? `sidebar w-[350px] lg:block`: `hidden`}`}
    >
      <News />
      <Connect />
      <Happening />
    </div>
  );
}
