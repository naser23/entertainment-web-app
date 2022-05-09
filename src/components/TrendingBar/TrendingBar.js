import React from "react";
import { useState, useContext } from "react";
import { useEffect } from "react";
import MovieApiContext from "../../context/MovieApiContext";
import { jsonData } from "../../data";
import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../../assets/icon-bookmark-full.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TvIcon from "../../assets/icon-category-tv.svg";

function TrendingBar() {
  const [trending, setTrending] = useState([]);
  const { data, loading, getData } = useContext(MovieApiContext);

  // useEffect(() => {
  //   // getData();
  //   // data && data.map((item) => item.isTrending && console.log(item.thumbnail));
  // }, []);

  return (
    <div className="trendingBar">
      <h1 className="trendingHeader">Trending</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="trendingItemContainer">
          {jsonData &&
            jsonData.map(
              (item) =>
                item.isTrending && (
                  <li
                    key={jsonData.indexOf(item)}
                    className="trendingItem"
                    style={{
                      backgroundImage: `url(${item.thumbnail.regular.large})`,
                    }}
                  >
                    <button className="BookmarkButton">
                      <img src={BookmarkIconEmpty} alt="Bookmark Icon" />
                    </button>
                    <section className="trendingItemInfo">
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

                      <h3 className="trendingMediaTitle">{item.title}</h3>
                    </section>
                  </li>
                )
            )}
        </ul>
      )}
    </div>
  );
}

export default TrendingBar;
