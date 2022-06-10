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
    credits: "",
  });
  const { type, media_id, data, credits } = movieDetails;

  const detailsUrl = `https://api.themoviedb.org/3/${type}/${media_id}?api_key=7666a18c935f4f574785edd530e93698`;

  // async function fetchDetails() {
  //   try {
  //     const response = await fetch(detailsUrl);
  //     const result = await response.json();
  //     return setMovieDetails({
  //       data: result,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  function fetchDetails() {
    const creditsUrl = `https://api.themoviedb.org/3/${type}/${media_id}/credits?api_key=7666a18c935f4f574785edd530e93698`;

    const detailsApiCall = axios.get(detailsUrl);
    const creditsApiCall = axios.get(creditsUrl);

    axios.all([detailsApiCall, creditsApiCall]).then(
      axios.spread((...allData) => {
        const detailsData = allData[0].data;
        const creditsData = allData[1].data;

        setMovieDetails({
          data: detailsData,
          credits: creditsData,
        });
      })
    );
  }

  return (
    <MovieDetailsContext.Provider
      value={{ type, media_id, data, credits, fetchDetails, setMovieDetails }}
    >
      {children}
    </MovieDetailsContext.Provider>
  );
}

export default MovieDetailsContext;
