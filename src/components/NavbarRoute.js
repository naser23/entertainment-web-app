import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const NavbarRoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavbarRoute;
