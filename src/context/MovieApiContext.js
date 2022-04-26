import { createContext, useState } from "react";

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

  return (
    <MovieApiContext.Provider value={{ data, loading, setLoading, getData }}>
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
