import { createContext, useState } from "react";
import { jsonData } from "../data";
import { useEffect } from "react";
import axios from "axios";

const SearchResultsContext = createContext();

export function SearchResultsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState({
    query: "",
    results: "",
    genre: "",
  });

  const [pageNumber, setPageNumber] = useState(1);
  const { query, results, genre } = searchData;
  // data for search results
  async function getData(text) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=7666a18c935f4f574785edd530e93698&query=${text}`
      );
      const result = await response.json();
      // resets page number for new search
      setPageNumber(1);
      setLoading(false);
      return setSearchData({
        query: text,
        results: result,
      });
    } catch (error) {
      console.error(error);
    }
  }

  function discoverMovieData() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=7666a18c935f4f574785edd530e93698&with_genres=${genre}`
      )
      .then((resp) => {
        console.log(resp);
        setSearchData({
          results: resp.data,
        });
      });
  }

  function discoverTVData() {
    const tvShowsOfGenre = axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=7666a18c935f4f574785edd530e93698&with_genres=${genre}`
    );

    console.log(tvShowsOfGenre);
  }

  async function searchPagination(updatedPageNumber) {
    const currentPageNumber = `&page=${updatedPageNumber}`;

    const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=7666a18c935f4f574785edd530e93698&query=${query}${currentPageNumber}`;

    try {
      setLoading(true);
      //   const params = new URLSearchParams({ query: text });
      const response = await fetch(searchUrl);
      const result = await response.json();
      setLoading(false);
      return setSearchData({
        query: query,
        results: result,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SearchResultsContext.Provider
      value={{
        query,
        results,
        genre,
        pageNumber,
        getData,
        discoverMovieData,
        setSearchData,
        setPageNumber,
        searchPagination,
      }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
}

export default SearchResultsContext;
