import { createContext, useState, useEffect } from "react";
import { jsonData } from "../data";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pageQuery, setPageQuery] = useState();
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
      setPageQuery(params);
      setPageNumber(1);
      return setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  async function queryThroughPages() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=7666a18c935f4f574785edd530e93698&${pageQuery}&page=${pageNumber}`
      );
      console.log(
        `https://api.themoviedb.org/3/search/multi?api_key=7666a18c935f4f574785edd530e93698&${pageQuery}&page=${pageNumber}`
      );
      const result = await response.json();
      console.log(result);
      return setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MovieApiContext.Provider
      value={{
        data,
        loading,
        pageNumber,
        setLoading,
        getData,
        setPageNumber,
        queryThroughPages,
      }}
    >
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
