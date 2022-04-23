import { createContext, useState, useEffect } from "react";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const settings = {
    headers: {
      method: "GET",
      redirect: "follow",
    },
  };

  async function getData(text) {
    const params = new URLSearchParams({ q: text });

    try {
      setLoading(true);
      const response = await fetch(
        `https://imdb-api.com/en/API/Search/k_jhige41v/${params}`
      );
      const result = await response.json();
      console.log(result);
      setLoading(false);
      return setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function getInTheatersData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://imdb-api.com/en/API/InTheaters/k_jhige41v`
      );
      const result = await response.json();
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  // data && data.map((piece) => console.log(piece.title));

  return (
    <MovieApiContext.Provider
      value={{ data, loading, setLoading, getData, getInTheatersData }}
    >
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
