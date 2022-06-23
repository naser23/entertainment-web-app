import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import Logo from "../Logo/Logo";
import ImageAvatar from "../../assets/image-avatar.png";
import TvLogoNav from "../../assets/icon-nav-tv-series.svg";
import MovieLogoNav from "../../assets/icon-nav-movies.svg";
import BookmarkLogoNav from "../../assets/icon-nav-bookmark.svg";
import HomeLogoNav from "../../assets/icon-nav-home.svg";
import "../Navbar/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { loggedIn, checkingStatus } = useAuthStatus();

  return (
    <>
      <nav className="navbar">
        <Logo />
        <ul className="navbarLinks">
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "activeImg" : "")}
              to="/"
            >
              <img src={HomeLogoNav} alt="Home Logo" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "activeImg" : "")}
              to="/movies"
            >
              <img src={MovieLogoNav} alt="Movie Logo" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "activeImg" : "")}
              to="/tv-series"
            >
              <img src={TvLogoNav} alt="TV Logo" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "activeImg" : "")}
              to="/bookmarked"
            >
              <img src={BookmarkLogoNav} alt="Bookmarked Logo" />
            </NavLink>
          </li>
        </ul>

        <button
          className="avatarImgButton"
          onClick={() => navigate("/profile")}
        >
          {loggedIn ? (
            <img className="avatarImg" src={ImageAvatar} alt="image avatar" />
          ) : (
            <p className="profileImg">P</p>
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
