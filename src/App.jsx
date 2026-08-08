// import PublicRoute from "./components/PublicRoute";
// import PublicRoute from "./components/PublicRoute";
// import Error from "./components/error";
import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";
import Profile from "./page/Profile";
import EditProfile from "./page/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import MainLayout from "./layout/MainLayout";
import SubLayout from "./layout/SubLayout";
import MainContent from "./layout/MainContent";
import Explore from "./page/Explore";
import Notifications from "./page/Notifications";
import Messages from "./page/Messages";
import AIChat from "./page/AIChat";
import Bookmarks from "./page/Bookmarks";
import JoinToday from "./page/JoinToday";
import Comment from "./layout/Comment";
import FullView from "./layout/FullView";
import { TweetsProvider } from "../src/components/tweetsProvider";

export default function App() {
  return (
    <>
      <div className="color min-h-screen flex justify-center">
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <JoinToday />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <JoinToday />
              </PublicRoute>
            }
          />
          <Route
            path="/full/:id"
            element={
              <ProtectedRoute>
                <TweetsProvider>
                  <FullView />
                </TweetsProvider>
              </ProtectedRoute>
            }
          />
          <Route path="/todo" element={<Todo />} />
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
              path="/:username"
              element={
                <TweetsProvider>
                  <Profile />
                </TweetsProvider>
              }
            />

            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/connect_people"
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
                  <TweetsProvider>
                    <Bookmarks />
                  </TweetsProvider>
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
            <Route
              path="/comment/:id"
              element={
                <ProtectedRoute>
                  <TweetsProvider>
                    <Comment />
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
