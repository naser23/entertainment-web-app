import React from "react";
import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../../assets/icon-bookmark-full.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TvIcon from "../../assets/icon-category-tv.svg";
import PlayIcon from "../../assets/icon-play.svg";
import { jsonData } from "../../data";
import { useContext } from "react";
import MovieApiContext from "../../context/MovieApiContext";
import "../Recommended/recommended.css";

function Recommended() {
  const { recommended } = useContext(MovieApiContext);

  return (
    <section className="recommendedForYou">
      <h1 className="recommendedHeader">Recommended for you</h1>
      <ul className="mediaContainer">
        {recommended &&
          recommended.results.map((item) => (
            <li className="mediaItem" key={item.id}>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt={item.media_type === "movie" ? "Movie Icon" : "Tv Icon"}
              />

              <button className="mediaBookmarkButton">
                <img
                  src={item.isBookmarked ? BookmarkIconFull : BookmarkIconEmpty}
                  alt="Bookmark Icon"
                />
              </button>
              <div className="mediaItemFacts">
                <p>
                  {item.media_type == "movie"
                    ? item.release_date.slice(0, 4)
                    : item.first_air_date.slice(0, 4)}
                </p>
                <div className="smallCircle"></div>
                <span className="itemCategory">
                  <img
                    src={item.media_type === "movie" ? MovieIcon : TvIcon}
                    alt="Media Type Icon"
                  />
                  <p>{item.media_type}</p>
                </span>
                <div className="smallCircle"></div>
                <p>{item.vote_average}</p>
              </div>
              <h3 className="mediaTitle">
                {item.media_type == "movie" ? item.title : item.name}
              </h3>
              <div className="playButtonContainer">
                <div className="playButton">
                  <img src={PlayIcon} alt="Play-icon" />
                  <p>Play</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Recommended;
