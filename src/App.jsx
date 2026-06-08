import { Routes, Route } from "react-router-dom";
import Profile from "./page/Profile";
import EditProfile from "./components/EditProfile";
import JoinToday from "./page/JoinToday";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./components/error";
import MainLayout from "./page/MainLayout";
import MainContent from "./components/maincontent";

export default function App() {
  return (
    <>
      <div className="color inline-flex justify-center  w-full h-full">
        <Routes>
          <Route path="/" element={<JoinToday />} />
          <Route path="/*" element={<Error />}></Route>
          <Route element={<MainLayout />}>
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
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <MainContent />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}
