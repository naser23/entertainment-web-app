import React from "react";
import MovieDetailsContext from "../../context/MovieDetailsContext";
import { useContext, useEffect } from "react";
import "../MovieDetails/moviedetails.css";

function MovieDetails() {
  const { type, media_id, data, fetchDetails } =
    useContext(MovieDetailsContext);
  useEffect(() => {
    fetchDetails();
    console.log(data);
  }, []);
  console.log(type, media_id);

  return (
    <main className="movieDetailsContainer">
      <section className="topSection">
        <h2 className="movieTitle">MovieName</h2>
      </section>
    </main>
  );
}

export default MovieDetails;
