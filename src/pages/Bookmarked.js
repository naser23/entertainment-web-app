import React from "react";
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../assets/icon-bookmark-full.svg";
import MovieIcon from "../assets/icon-category-movie.svg";
import TvIcon from "../assets/icon-category-tv.svg";
import PlayIcon from "../assets/icon-play.svg";
import { jsonData } from "../data";

function Bookmarked() {
  return (
    <>
      <main className="pageContainer">
        <h1 className="header">Bookmarked Movies</h1>
        <ul className="mediaContainer"></ul>
        <>
          <h1 className="header">Bookmarked TV Series</h1>
          <ul className="mediaContainer"></ul>
        </>
      </main>
    </>
  );
}

export default Bookmarked;
