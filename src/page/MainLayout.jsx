import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet /> {}
      <Sidebar />
    </>
  );
}
