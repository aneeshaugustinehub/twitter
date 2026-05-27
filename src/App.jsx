import MainContent from "./components/maincontent";
import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <div className="color inline-flex justify-center  w-full">
      <NavBar />
      <MainContent/>
      <Sidebar />
    </div>
  );
}
