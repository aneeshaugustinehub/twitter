import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Profile from "./page/Profile";
import EditProfile from "./components/EditProfile";
import JoinToday from "./page/JoinToday";
import Login from "./page/login"

export default function App() {
  return (
    <div className="color inline-flex justify-center  w-full h-full">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/" element={<JoinToday />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}