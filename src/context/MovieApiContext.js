import { createContext, useState, useEffect } from "react";
import { jsonData } from "../data";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  // const settings = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  // };
  const settings = {
    headers: {
      METHOD: "GET",
    },
  };

  async function getData(text) {
    try {
      setLoading(true);
      const params = new URLSearchParams({ query: text });
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=7666a18c935f4f574785edd530e93698&${params}&page=${pageNumber}`
      );
      const result = await response.json();
      setLoading(false);
      return setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  // function resultsData(text) {
  //   // clear the results array before searching
  //   setResults([]);

  //   // filtering out the data based on the text state
  //   setResults(
  //     jsonData.filter((jsonData) =>
  //       jsonData.title.toLowerCase().includes(text.toLowerCase())
  //     )
  //   );
  // }

  return (
    <MovieApiContext.Provider
      value={{ data, loading, pageNumber, setLoading, getData, setPageNumber }}
    >
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
