import React from "react";
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../assets/icon-bookmark-full.svg";
import MovieIcon from "../assets/icon-category-movie.svg";
import TvIcon from "../assets/icon-category-tv.svg";
import PlayIcon from "../assets/icon-play.svg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MovieApiContext from "../context/MovieApiContext";
import SearchResultsContext from "../context/SearchResultsContext";

function Bookmarked() {
  const { movieGenres, tvGenres } = useContext(MovieApiContext);
  const { setGenre, discoverMovieData, discoverTVData, setSearchData } =
    useContext(SearchResultsContext);

  const navigate = useNavigate();

  function discoverMovies(id) {
    setGenre(id);
    discoverMovieData(id);
    navigate("/movie-category");
  }

  function discoverTv(id) {
    setGenre(id);
    discoverTVData(id);
    navigate("/tv-category");
  }

  return (
    <>
      <main className="pageContainer">
        <h1 className="header">Movie Genres</h1>
        <ul className="genreContainer">
          {movieGenres &&
            movieGenres.genres.map((item) => (
              <div
                key={item.id}
                className="genreItem"
                onClick={() => discoverMovies(item.id)}
              >
                <h3 className="genreHeader">{item.name}</h3>
              </div>
            ))}
        </ul>
        <>
          <h1 className="header">Bookmarked TV Series</h1>
          <ul className="genreContainer">
            {tvGenres &&
              tvGenres.genres.map((item) => (
                <div
                  key={item.id}
                  className="genreItem"
                  onClick={() => discoverTv(item.id)}
                >
                  <h3 className="genreHeader">{item.name}</h3>
                </div>
              ))}
          </ul>
        </>
      </main>
    </>
  );
}

export default Bookmarked;
