import React from "react";

import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MovieDetailsContext = createContext();

export function MovieDetailsProvider({ children }) {
  const [movieDetails, setMovieDetails] = useState({
    type: "",
    mediaId: "",
    data: "",
  });
  const { type, media_id, data } = movieDetails;

  const detailsUrl = `https://api.themoviedb.org/3/${type}/${media_id}?api_key=7666a18c935f4f574785edd530e93698`;

  async function fetchDetails() {
    try {
      const response = await fetch(detailsUrl);
      const result = await response.json();
      console.log(result);
      //   return setMovieDetails({
      //     data: result,
      //   });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MovieDetailsContext.Provider
      value={{ type, media_id, data, fetchDetails, setMovieDetails }}
    >
      {children}
    </MovieDetailsContext.Provider>
  );
}

export default MovieDetailsContext;
