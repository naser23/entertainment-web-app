import { createContext, useState, useEffect } from "react";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [data, setData] = useState();
  const [movies, setMovies] = useState([]);

  const settings = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://imdb-api.com/en/API/Search/k_jhige41v/sonic"
        );
        const result = await response.json();
        console.log(result);
        return setData(result);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  // data && data.map((piece) => console.log(piece.title));

  return (
    <MovieApiContext.Provider value={{ data }}>
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
