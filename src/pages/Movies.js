import React from "react";
import PopularMovies from "../components/MoviePageComponets/PopularMovies";
import TopRatedMovies from "../components/MoviePageComponets/TopRatedMovies";
import NowPlayingMovies from "../components/MoviePageComponets/NowPlayingMovies";

function Movies() {
  return (
    <>
      <main className="pageContainer">
        <NowPlayingMovies />
        <TopRatedMovies />
        <PopularMovies />
      </main>
    </>
  );
}

export default Movies;
