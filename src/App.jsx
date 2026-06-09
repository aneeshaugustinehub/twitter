import { Routes, Route } from "react-router-dom";
import Profile from "./page/Profile";
import EditProfile from "./components/EditProfile";
import JoinToday from "./page/JoinToday";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./components/error";
import MainLayout from "./components/MainLayout";
import SubLayout from "./components/SubLayout";
import MainContent from "./components/maincontent";
import Explore from "./page/Explore";
import Notifications from "./page/Notifications";
import Messages from "./page/Messages";
import AIChat from "./page/AIChat";
import Bookmarks from "./page/Bookmarks";


export default function App() {
  return (
    <>
      <div className="color inline-flex justify-center  w-full h-full">
        <Routes>
          <Route path="/" element={<JoinToday />} />
          <Route path="/*" element={<Error />}></Route>
          <Route element={<SubLayout />}>
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Messages />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gork"
              element={
                <ProtectedRoute>
                  <AIChat />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route element={<MainLayout />}>
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Bookmarks"
              element={
                <ProtectedRoute>
                  <Bookmarks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/explore"
              element={
                <ProtectedRoute>
                  <Explore />
                </ProtectedRoute>
              }
            />
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
