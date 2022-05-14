import { createContext, useState, useEffect } from "react";
import { jsonData } from "../data";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

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

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=9b53d99e&s=batman"
      );
      const result = await response.json();
      console.log(result);
      setLoading(false);
      return setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getData();
  }, []);

  function resultsData(text) {
    // clear the results array before searching
    setResults([]);

    // filtering out the data based on the text state
    setResults(
      jsonData.filter((jsonData) =>
        jsonData.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  }

  return (
    <MovieApiContext.Provider
      value={{ data, loading, results, setLoading, getData, resultsData }}
    >
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
