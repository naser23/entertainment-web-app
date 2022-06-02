import React from "react";
import { useState, useContext } from "react";
import MovieApiContext from "../../context/MovieApiContext";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TvIcon from "../../assets/icon-category-tv.svg";
import "../TrendingBar/trendingbar.css";

function TrendingBar() {
  const [trending, setTrending] = useState([]);
  const { data, loading, trendingData } = useContext(MovieApiContext);

  return (
    <div className="trendingBar">
      <h1 className="trendingHeader">Trending</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="trendingItemContainer">
          {trendingData &&
            trendingData.results.map((item) => (
              <li
                key={item.id}
                className="trendingItem"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.poster_path})`,
                }}
              >
                <section className="trendingItemInfo">
                  <div className="itemFacts">
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

                  <h3 className="trendingMediaTitle">
                    {item.media_type == "movie" ? item.title : item.name}
                  </h3>
                </section>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default TrendingBar;
