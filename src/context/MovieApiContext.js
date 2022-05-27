import { createContext, useState } from "react";
import { jsonData } from "../data";
import { useEffect } from "react";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [trendingData, setTrendingData] = useState();
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

  async function getTrendingData() {
    try {
      setLoading(true);
      const resp = await fetch(
        "https://api.themoviedb.org/3/trending/all/week?api_key=7666a18c935f4f574785edd530e93698"
      );
      const result = await resp.json();
      setLoading(false);
      return setTrendingData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTrendingData();
  }, []);

  // async function queryThroughPages() {
  //   try {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/search/multi?api_key=7666a18c935f4f574785edd530e93698&${pageQuery}&page=${pageNumber}`
  //     );
  //     const result = await response.json();
  //     console.log(result);
  //     return setData(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <MovieApiContext.Provider
      value={{
        data,
        loading,
        pageNumber,
        trendingData,
        setLoading,
        getData,
        setPageNumber,
      }}
    >
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
