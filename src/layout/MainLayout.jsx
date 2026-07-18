import { Outlet } from "react-router-dom";
import NavBar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet /> {}
      <Sidebar />
    </>
  );
}
