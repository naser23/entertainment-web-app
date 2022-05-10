import React from "react";
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../assets/icon-bookmark-full.svg";
import MovieIcon from "../assets/icon-category-movie.svg";
import TvIcon from "../assets/icon-category-tv.svg";
import PlayIcon from "../assets/icon-play.svg";
import MovieApiContext from "../context/MovieApiContext";
import { useContext } from "react";
import { jsonData } from "../data";

function SearchResults() {
  const { results } = useContext(MovieApiContext);

  if (results && results.length == 0) {
    return (
      <main className="pageContainer">
        <h1 className="header">Results for Search</h1>
        <p>No Results...</p>
      </main>
    );
  }

  return (
    <>
      <main className="pageContainer">
        <h1 className="header">Results for Search</h1>
        <ul className="mediaContainer">
          {results &&
            results.map((item) => (
              <li className="mediaItem" key={jsonData.indexOf(item)}>
                <img
                  className="img"
                  src={item.thumbnail.regular.large}
                  alt={item.category === "Movie" ? "Movie Icon" : "Tv Icon"}
                />

                <button className="mediaBookmarkButton">
                  <img src={BookmarkIconEmpty} alt="Bookmark Icon" />
                </button>
                <div className="mediaItemFacts">
                  <p>{item.year}</p>
                  <div className="smallCircle"></div>
                  <span className="itemCategory">
                    <img
                      src={item.category === "Movie" ? MovieIcon : TvIcon}
                      alt="Media Type Icon"
                    />
                    <p>{item.category}</p>
                  </span>
                  <div className="smallCircle"></div>
                  <p>{item.rating}</p>
                </div>
                <h3 className="mediaTitle">{item.title}</h3>
                <div className="playButtonContainer">
                  <div className="playButton">
                    <img src={PlayIcon} alt="Play-icon" />
                    <p>Play</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}

export default SearchResults;
