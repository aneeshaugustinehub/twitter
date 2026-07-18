import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

export default function SubLayout() {
  return (
    <>
      <NavBar />
      <Outlet /> {}
    </>
  );
}
