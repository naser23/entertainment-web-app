import React from "react";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TvIcon from "../../assets/icon-category-tv.svg";
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
                <div className="imgArea">
                  <img
                    className="img"
                    src={item.thumbnail.regular.small}
                    alt={item.category === "Movie" ? "Movie Icon" : "Tv Icon"}
                  />
                  <BookmarkButton />
                </div>
              </li>
            )
        )}
      </ul>
    </section>
  );
}

export default Recommended;
