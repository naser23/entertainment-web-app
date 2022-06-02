import React from "react";
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../assets/icon-bookmark-full.svg";
import MovieIcon from "../assets/icon-category-movie.svg";
import TvIcon from "../assets/icon-category-tv.svg";
import PlayIcon from "../assets/icon-play.svg";
import LatestTv from "../components/TvPageComponents/LatestTv";
import PopularTv from "../components/TvPageComponents/PopularTv";
import TopRatedTv from "../components/TvPageComponents/TopRatedTv";

function TvSeries() {
  return (
    <>
      <main className="pageContainer">
        <LatestTv />
        <PopularTv />
        <TopRatedTv />
      </main>
    </>
  );
}

export default TvSeries;
