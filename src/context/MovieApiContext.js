import { createContext, useState } from "react";
import { jsonData } from "../data";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const settings = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  async function getData() {
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
