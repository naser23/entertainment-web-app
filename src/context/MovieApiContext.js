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

  // useEffect(() => {
  //   async function getData(text) {
  //     const params = new URLSearchParams({ q: text });

  //     try {
  //       const response = await fetch(
  //         `https://imdb-api.com/en/API/Search/k_jhige41v/${params}`
  //       );
  //       const result = await response.json();
  //       console.log(result);
  //       return setData(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData();
  // }, []);

  async function getData(text) {
    const params = new URLSearchParams({ q: text });

    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/Search/k_jhige41v/${params}`
      );
      const result = await response.json();
      console.log(result);
      return setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  // data && data.map((piece) => console.log(piece.title));

  return (
    <MovieApiContext.Provider value={{ data, getData }}>
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
