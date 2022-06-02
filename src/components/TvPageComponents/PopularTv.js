import React from "react";
import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../../assets/icon-bookmark-full.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TvIcon from "../../assets/icon-category-tv.svg";
import PlayIcon from "../../assets/icon-play.svg";
import { useContext } from "react";
import MovieApiContext from "../../context/MovieApiContext";

function PopularTv() {
  const { popularTv } = useContext(MovieApiContext);

  return (
    <>
      <h1 className="header">Popular Tv Shows</h1>
      <ul className="mediaContainer">
        {popularTv &&
          // only getting 8 results at a time
          popularTv.results.slice(0, 8).map((item) => (
            <li className="mediaItem" key={item.id}>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt={"Tv Show Image"}
              />

              <button className="mediaBookmarkButton">
                <img
                  src={item.isBookmarked ? BookmarkIconFull : BookmarkIconEmpty}
                  alt="Bookmark Icon"
                />
              </button>
              <div className="mediaItemFacts">
                <p>{item.first_air_date.slice(0, 4)}</p>
                <div className="smallCircle"></div>
                <span className="itemCategory">
                  <img src={MovieIcon} alt="Media Type Icon" />
                  <p>tv</p>
                </span>
                <div className="smallCircle"></div>
                <p>{item.vote_average}</p>
              </div>
              <h3 className="mediaTitle">{item.name}</h3>
              <div className="playButtonContainer">
                <div className="playButton">
                  <img src={PlayIcon} alt="Play-icon" />
                  <p>Play</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default PopularTv;
