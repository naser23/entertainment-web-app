import React from "react";
import MediaBookmark from "../mediaBookmarkButton/MediaBookmark";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TvIcon from "../../assets/icon-category-tv.svg";
import PlayIcon from "../../assets/icon-play.svg";
import { jsonData } from "../../data";

function Recommended() {
  return (
    <section className="recommendedForYou">
      <h1 className="recommendedHeader">Recommended for you</h1>
      <ul className="mediaContainer">
        {jsonData.map(
          (item) =>
            !item.isTrending && (
              <li className="mediaItem" key={jsonData.indexOf(item)}>
                <img
                  className="img"
                  src={item.thumbnail.regular.small}
                  alt={item.category === "Movie" ? "Movie Icon" : "Tv Icon"}
                />
                <MediaBookmark />
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
    </section>
  );
}

export default Recommended;
