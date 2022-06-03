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
  const [pageNumber, setPageNumber] = useState(1);

  const { query, results } = searchData;
  // data for search results
  async function getData(text) {
    try {
      setLoading(true);
      //   const params = new URLSearchParams({ query: text });
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=7666a18c935f4f574785edd530e93698&query=${text}&page=${pageNumber}`
      );
      const result = await response.json();
      setLoading(false);
      setPageNumber(1);
      return setSearchData({
        query: text,
        results: result,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function searchPagination() {
    const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=7666a18c935f4f574785edd530e93698&${query}&page=${pageNumber}`;
  }

  return (
    <SearchResultsContext.Provider value={{ query, results, getData }}>
      {children}
    </SearchResultsContext.Provider>
  );
}

export default SearchResultsContext;
