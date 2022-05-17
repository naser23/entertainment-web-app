import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import ImageAvatar from "../../assets/image-avatar.png";
import TvLogoNav from "../../assets/icon-nav-tv-series.svg";
import MovieLogoNav from "../../assets/icon-nav-movies.svg";
import BookmarkLogoNav from "../../assets/icon-nav-bookmark.svg";
import HomeLogoNav from "../../assets/icon-nav-home.svg";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <Logo />
        <ul className="navbarLinks">
          <li onClick={() => navigate("/")}>
            <img src={HomeLogoNav} alt="Home Logo" />
          </li>
          <li onClick={() => navigate("/movies")}>
            <img src={MovieLogoNav} alt="Movie Logo" />
          </li>
          <li onClick={() => navigate("/tv-series")}>
            <img src={TvLogoNav} alt="TV Logo" />
          </li>
          <li onClick={() => navigate("/bookmarked")}>
            <img src={BookmarkLogoNav} alt="Bookmarked Logo" />
          </li>
        </ul>

        <button
          className="avatarImgButton"
          onClick={() => navigate("/profile")}
        >
          {/* <img className="avatarImg" src={ImageAvatar} alt="image avatar" /> */}
          <p className="profileImg">P</p>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
