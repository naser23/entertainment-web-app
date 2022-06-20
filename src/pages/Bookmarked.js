import React from "react";
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../assets/icon-bookmark-full.svg";
import MovieIcon from "../assets/icon-category-movie.svg";
import TvIcon from "../assets/icon-category-tv.svg";
import PlayIcon from "../assets/icon-play.svg";
import { useContext } from "react";
import MovieApiContext from "../context/MovieApiContext";

function Bookmarked() {
  const { movieGenres, tvGenres } = useContext(MovieApiContext);

  return (
    <>
      <main className="pageContainer">
        <h1 className="header">Movie Genres</h1>
        <ul className="genreContainer">
          {movieGenres &&
            movieGenres.genres.map((item) => (
              <div key={item.id} className="genreItem">
                <h3 className="genreHeader">{item.name}</h3>
              </div>
            ))}
        </ul>
        <>
          <h1 className="header">Bookmarked TV Series</h1>
          <ul className="genreContainer">
            {tvGenres &&
              tvGenres.genres.map((item) => (
                <div key={item.id} className="genreItem">
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
