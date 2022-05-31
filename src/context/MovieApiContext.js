import { createContext, useState } from "react";
import { jsonData } from "../data";
import { useEffect } from "react";
import axios from "axios";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState();
  const [mediaData, setMediaData] = useState({
    trendingData: "",
    recommended: "",
    popularMovies: "",
    topRatedMovies: "",
    nowPlaying: "",
  });
  const [pageQuery, setPageQuery] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  // const settings = {
  //   headers: {
  //     METHOD: "GET",
  //   },
  // };

  const {
    trendingData,
    recommended,
    popularMovies,
    topRatedMovies,
    nowPlaying,
  } = mediaData;

  const trendingMedia =
    "https://api.themoviedb.org/3/trending/all/week?api_key=7666a18c935f4f574785edd530e93698";

  const recommendedMedia =
    "https://api.themoviedb.org/3/trending/all/day?api_key=7666a18c935f4f574785edd530e93698";

  // movie api links
  const allPopularMovies =
    "https://api.themoviedb.org/3/movie/popular?api_key=7666a18c935f4f574785edd530e93698";

  const allTopRatedMovies =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=7666a18c935f4f574785edd530e93698";

  const allNowPlaying =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=7666a18c935f4f574785edd530e93698";

  // data for search results
  async function getData(text) {
    try {
      setLoading(true);

      const params = new URLSearchParams({ query: text });
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=7666a18c935f4f574785edd530e93698&${params}&page=${pageNumber}`
      );
      const result = await response.json();
      setLoading(false);
      setPageNumber(1);
      return setSearchData(result);
    } catch (error) {
      console.error(error);
    }
  }

  // setting up all api calls with axios
  async function axiosFetch() {
    const trendingMediaApiCall = axios.get(trendingMedia);
    const recommendedMediaApiCall = axios.get(recommendedMedia);
    const allPopularMoviesApiCall = axios.get(allPopularMovies);
    const allTopRatedMoviesApiCall = axios.get(allPopularMovies);
    const allNowPlayingApiCall = axios.get(allNowPlaying);

    axios
      .all([
        trendingMediaApiCall,
        recommendedMediaApiCall,
        allPopularMoviesApiCall,
        allTopRatedMoviesApiCall,
        allNowPlayingApiCall,
      ])
      .then(
        axios.spread((...allData) => {
          // home page data
          const trendMedia = allData[0].data;
          const recommendMedia = allData[1].data;

          // movie page data
          const allPopMovies = allData[2].data;
          const allTopRated = allData[3].data;
          const allNowPlaying = allData[4].data;

          setMediaData({
            // home page data
            trendingData: trendMedia,
            recommended: recommendMedia,

            // movie page data
            popularMovies: allPopMovies,
            topRatedMovies: allTopRated,
            nowPlaying: allNowPlaying,
          });
        })
      );
  }

  // data for trending section
  // async function getTrendingData() {
  //   try {
  //     setLoading(true);
  //     const resp = await fetch(
  //       "https://api.themoviedb.org/3/trending/all/week?api_key=7666a18c935f4f574785edd530e93698"
  //     );
  //     const result = await resp.json();
  //     setLoading(false);
  //     return setTrendingData(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // //  data for recommended section
  // async function otherHomeScreenData() {
  //   try {
  //     setLoading(true);
  //     const resp = await fetch(
  //       "https://api.themoviedb.org/3/trending/all/day?api_key=7666a18c935f4f574785edd530e93698"
  //     );
  //     const result = await resp.json();
  //     setLoading(false);
  //     return setRecommended(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // // data for PopularMovies component
  // async function getPopularMovies() {
  //   try {
  //     setLoading(true);
  //     const resp = await fetch(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=7666a18c935f4f574785edd530e93698"
  //     );
  //     const result = await resp.json();
  //     setLoading(false);
  //     return setPopularMovies(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // // data for TopRatedMovies component
  // async function getTopRatedMovies() {
  //   try {
  //     setLoading(true);
  //     const resp = await fetch(
  //       "https://api.themoviedb.org/3/movie/top_rated?api_key=7666a18c935f4f574785edd530e93698"
  //     );
  //     const result = await resp.json();
  //     setLoading(false);
  //     return setTopRatedMovies(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // // data for NowPlaying component
  // async function getNowPlayingMovies() {
  //   try {
  //     setLoading(true);
  //     const resp = await fetch(
  //       "https://api.themoviedb.org/3/movie/now_playing?api_key=7666a18c935f4f574785edd530e93698"
  //     );
  //     const result = await resp.json();
  //     setLoading(false);
  //     return setNowPlaying(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function getLatestTvSeries() {
  //   try {
  //     setLoading(true);
  //     const resp = await fetch(
  //       "https://api.themoviedb.org/3/tv/latest?api_key=7666a18c935f4f574785edd530e93698"
  //     );
  //     const result = await resp.json();
  //     setLoading(false);
  //     return setNowPlaying(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    // getTrendingData();

    // // movie data
    // otherHomeScreenData();
    // getPopularMovies();
    // getTopRatedMovies();
    // getNowPlayingMovies();

    axiosFetch();

    // tv data
  }, []);

  return (
    <MovieApiContext.Provider
      value={{
        searchData,
        loading,
        pageNumber,
        trendingData,
        recommended,
        popularMovies,
        topRatedMovies,
        nowPlaying,
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
