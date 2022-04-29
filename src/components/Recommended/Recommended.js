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
                <div className="itemFacts">
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
              </li>
            )
        )}
      </ul>
    </section>
  );
}

export default Recommended;
