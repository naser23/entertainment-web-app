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
        <ul className="mediaContainer">
          {jsonData.map(
            (item) =>
              item.category == "Movie" &&
              item.isBookmarked && (
                <li className="mediaItem" key={jsonData.indexOf(item)}>
                  <img
                    className="img"
                    src={item.thumbnail.regular.large}
                    alt={item.category === "Movie" ? "Movie Icon" : "Tv Icon"}
                  />

                  <button className="mediaBookmarkButton">
                    <img src={BookmarkIconFull} alt="Bookmark Icon" />
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
              )
          )}
        </ul>
        <>
          <h1 className="header">Bookmarked TV Series</h1>
          <ul className="mediaContainer">
            {jsonData.map(
              (item) =>
                item.category == "TV Series" &&
                item.isBookmarked && (
                  <li className="mediaItem" key={jsonData.indexOf(item)}>
                    <img
                      className="img"
                      src={item.thumbnail.regular.large}
                      alt={item.category === "Movie" ? "Movie Icon" : "Tv Icon"}
                    />

                    <button className="mediaBookmarkButton">
                      <img src={BookmarkIconFull} alt="Bookmark Icon" />
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
                )
            )}
          </ul>
        </>
      </main>
    </>
  );
}

export default Bookmarked;
