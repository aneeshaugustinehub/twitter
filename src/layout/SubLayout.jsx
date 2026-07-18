import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

export default function SubLayout() {
  return (
    <>
      <NavBar />
      <Outlet /> {}
    </>
  );
}
