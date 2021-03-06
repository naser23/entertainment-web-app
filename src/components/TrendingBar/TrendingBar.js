import React from "react";
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieApiContext from "../../context/MovieApiContext";
import MovieDetailsContext from "../../context/MovieDetailsContext";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TvIcon from "../../assets/icon-category-tv.svg";
import "../TrendingBar/trendingbar.css";

function TrendingBar() {
  const [trending, setTrending] = useState([]);
  const { data, loading, trendingData } = useContext(MovieApiContext);
  const { type, media_id, setMovieDetails } = useContext(MovieDetailsContext);

  const navigate = useNavigate();
  const { media_type, id } = useParams();

  function getMediaDetails(item) {
    setMovieDetails({
      type: item.media_type,
      media_id: item.id,
    });
    navigate(`/${item.media_type}/${item.id}`);
  }

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
                onClick={() => getMediaDetails(item)}
              >
                <section className="trendingItemInfo">
                  <div className="itemFacts">
                    <p>
                      {item.media_type == "movie"
                        ? item.release_date.slice(0, 4)
                        : item.first_air_date.slice(0, 4)}
                    </p>
                    <span className="smallCircle"></span>
                    <div className="itemCategory">
                      <img
                        src={item.media_type === "movie" ? MovieIcon : TvIcon}
                        alt="Media Type Icon"
                      />
                      <p>{item.media_type}</p>
                    </div>
                    <div className="smallCircle"></div>
                    <p>{item.vote_average}</p>
                  </div>

                  <h2 className="trendingMediaTitle">
                    {item.media_type == "movie" ? item.title : item.name}
                  </h2>
                </section>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default TrendingBar;
