import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Profile from "./page/Profile";
import EditProfile from "./components/EditProfile";
import JoinToday from "./page/JoinToday";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="color inline-flex justify-center  w-full h-full">
      <Routes>
        <Route path="/*"
        element={
          <JoinToday/>
        }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/EditProfile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<JoinToday />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
