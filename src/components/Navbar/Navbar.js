import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import TvLogo from "../../assets/icon-nav-tv-series.svg";
import MovieLogoNav from "../../assets/icon-nav-movies.svg";
import BookmarkLogoNav from "../../assets/icon-nav-bookmark.svg";
import HomeLogoNav from "../../assets/icon-nav-home.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbarLinks">
          <li>Home</li>
          <li>Tv Series</li>
          <li>Bookmarked</li>
          <li>Movies</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
