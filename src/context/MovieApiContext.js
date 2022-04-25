import { createContext, useState, useEffect } from "react";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const settings = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  async function getData() {
    // const params = new URLSearchParams({ q: text });

    try {
      setLoading(true);
      const response = await fetch(`data.json`, settings);
      const result = await response.json();
      setLoading(false);
      return setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  // async function getInTheatersData() {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://imdb-api.com/en/API/InTheaters/k_jhige41v`
  //     );
  //     const result = await response.json();
  //     console.log(result);
  //     setLoading(false);
  //     return setOutNow(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // https://imdb-api.com/en/API/Search/k_jhige41v/${params}

  return (
    <MovieApiContext.Provider value={{ data, loading, setLoading, getData }}>
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
