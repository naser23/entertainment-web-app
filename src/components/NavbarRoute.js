import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";

const NavbarRoute = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Outlet />
    </>
  );
};

export default NavbarRoute;
