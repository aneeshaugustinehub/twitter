import { Routes, Route } from "react-router-dom";
import Profile from "./page/Profile";
import EditProfile from "./page/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute";
// import PublicRoute from "./components/PublicRoute";
// import PublicRoute from "./components/PublicRoute";
// import Error from "./components/error";
// import Todo from "./components/Todo";
import MainLayout from "./layout/MainLayout";
import SubLayout from "./layout/SubLayout";
import MainContent from "./layout/MainContent";
import Explore from "./page/Explore";
import Notifications from "./page/Notifications";
import Messages from "./page/Messages";
import AIChat from "./page/AIChat";
import Bookmarks from "./page/Bookmarks";
import JoinToday from "./page/JoinToday";
import { TweetsProvider } from "../src/components/tweetsProvider";
import { Navigate } from "react-router-dom";
import { useUser } from "./components/UserContext";

export default function App() {
  const { user } = useUser();
  const isLoggedIn = !!user?.token;
  return (
    <>
      <div className="color min-h-screen flex justify-center">
        <Routes>
          <Route
            path="/:username"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <JoinToday />}
          />
          {/* <Route path="/todo" element={<Todo />} /> */}
          {/* <Route path="/*" element={<Error />}></Route> */}
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
              path="/editprofile"
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
                  <TweetsProvider>
                    <MainContent />
                  </TweetsProvider>
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}
