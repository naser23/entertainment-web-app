import React from "react";
import MovieIcon from "../assets/icon-category-movie.svg";
import TvIcon from "../assets/icon-category-tv.svg";
import PlayIcon from "../assets/icon-play.svg";
import Image from "./Image";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieApiContext from "../context/MovieApiContext";
import MovieDetailsContext from "../context/MovieDetailsContext";
import "../components/mediaItem.css";

function Recommended() {
  const { recommended } = useContext(MovieApiContext);
  const navigate = useNavigate();
  const { media_type, id } = useParams();
  const { type, media_id, setMovieDetails } = useContext(MovieDetailsContext);

  function getMediaDetails(item) {
    setMovieDetails({
      type: item.media_type,
      media_id: item.id,
    });
    navigate(`/${item.media_type}/${item.id}`);
  }

  return (
    <section className="recommendedForYou">
      <h1 className="recommendedHeader">Recommended for you</h1>
      <ul className="mediaContainer">
        {recommended &&
          recommended.results.map((item) => (
            <li
              className="mediaItem"
              key={item.id}
              onClick={() => getMediaDetails(item)}
            >
              <Image item={item} />

              <div className="mediaItemFacts">
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
              <h2 className="mediaTitle">
                {item.media_type == "movie" ? item.title : item.name}
              </h2>
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
