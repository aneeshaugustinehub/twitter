import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Sidebar from "./sidebar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet /> {}
      <Sidebar />
    </>
  );
}
