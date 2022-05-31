import React from "react";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import NowPlayingMovies from "../components/NowPlayingMovies";

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
