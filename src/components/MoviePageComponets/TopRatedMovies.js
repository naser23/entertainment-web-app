import React from "react";
import MovieIcon from "../../assets/icon-category-movie.svg";
import PlayIcon from "../../assets/icon-play.svg";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieApiContext from "../../context/MovieApiContext";
import MovieDetailsContext from "../../context/MovieDetailsContext";
import Image from "../Image";

function TopRatedMovies() {
  const { topRatedMovies } = useContext(MovieApiContext);
  const navigate = useNavigate();
  const { media_type, id } = useParams();
  const { type, media_id, setMovieDetails } = useContext(MovieDetailsContext);

  function getMediaDetails(item) {
    setMovieDetails({
      type: "movie",
      media_id: item.id,
    });
    navigate(`/tv/${item.id}`);
  }

  return (
    <>
      <h1 className="header">Top Rated Movies</h1>
      <ul className="mediaContainer">
        {topRatedMovies &&
          // only getting 8 results at a time
          topRatedMovies.results.slice(0, 8).map((item) => (
            <li
              className="mediaItem"
              key={item.id}
              onClick={() => getMediaDetails(item)}
            >
              <Image item={item} />
              <div className="mediaItemFacts">
                <p>{item.release_date.slice(0, 4)}</p>
                <div className="smallCircle"></div>
                <span className="itemCategory">
                  <img src={MovieIcon} alt="Media Type Icon" />
                  <p>movie</p>
                </span>
                <div className="smallCircle"></div>
                <p>{item.vote_average}</p>
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
    </>
  );
}

export default TopRatedMovies;
