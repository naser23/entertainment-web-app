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
  });

  const [genre, setGenre] = useState();
  const [categoryMovieResults, setCategoryMovieResults] = useState();
  const [categoryTvResults, setCategoryTvResults] = useState();

  const [pageNumber, setPageNumber] = useState(1);
  const { query, results } = searchData;

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

  // for movie category data
  function discoverMovieData(genre) {
    setPageNumber(1);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=7666a18c935f4f574785edd530e93698&with_genres=${genre}`
      )
      .then((resp) => {
        setCategoryMovieResults(resp.data);
        console.log("function ran!");
      });
  }

  // for tv category data
  function discoverTVData(genre) {
    setPageNumber(1);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=7666a18c935f4f574785edd530e93698&with_genres=${genre}`
      )
      .then((resp) => {
        setCategoryTvResults(resp.data);
        console.log(resp.data);
      });
    console.log("function ran!");
  }

  // pagination for search results
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

  function movieCategoryPagePagination(updatedPageNumber) {
    const currentPageNumber = `&page=${updatedPageNumber}`;

    const pageUrl = `https://api.themoviedb.org/3/discover/movie?api_key=7666a18c935f4f574785edd530e93698&with_genres=${genre}${currentPageNumber}`;

    axios.get(pageUrl).then((resp) => {
      setCategoryMovieResults(resp.data);
    });
  }

  // Tv Search Pagination
  function tvCategoryPagePagination(updatedPageNumber) {
    const currentPageNumber = `&page=${updatedPageNumber}`;

    const pageUrl = `https://api.themoviedb.org/3/discover/tv?api_key=7666a18c935f4f574785edd530e93698&with_genres=${genre}${currentPageNumber}`;

    axios.get(pageUrl).then((resp) => {
      setCategoryTvResults(resp.data);
    });
  }

  return (
    <SearchResultsContext.Provider
      value={{
        query,
        results,
        pageNumber,
        categoryMovieResults,
        categoryTvResults,
        getData,
        discoverMovieData,
        discoverTVData,
        setSearchData,
        setGenre,
        movieCategoryPagePagination,
        tvCategoryPagePagination,
        setPageNumber,
        searchPagination,
      }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
}

export default SearchResultsContext;
