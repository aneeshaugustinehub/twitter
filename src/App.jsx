import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Profile from "./page/Profile";
import EditProfile from "./components/EditProfile";
import JoinToday from "./page/JoinToday";
import Login from "./page/login"
import ProtectedRoute from "./components/ProtectedRoute"

export default function App() {
  return (
    <div className="color inline-flex justify-center  w-full h-full">
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/" element={<JoinToday />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ProtectedRoute>
        <Route path="/Home" element={<Home />} />
      </ProtectedRoute>
    </div>
  );
}