import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [mediaData, setMediaData] = useState({
    trendingData: "",
    recommended: "",
    popularMovies: "",
    topRatedMovies: "",
    nowPlaying: "",
    latestTv: "",
    popularTv: "",
    topRatedTv: "",
    movieGenres: "",
    tvGenres: "",
  });
  const [movieDetails, setMovieDetails] = useState({
    type: "",
    id: "",
  });

  const { type, id } = movieDetails;

  const {
    trendingData,
    recommended,
    popularMovies,
    topRatedMovies,
    nowPlaying,
    latestTv,
    popularTv,
    topRatedTv,
    movieGenres,
    tvGenres,
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

  // tv show links
  const allLatestTv =
    "https://api.themoviedb.org/3/tv/on_the_air?api_key=7666a18c935f4f574785edd530e93698";

  const allPopularTv =
    "https://api.themoviedb.org/3/tv/popular?api_key=7666a18c935f4f574785edd530e93698";

  const allTopRatedTv =
    "https://api.themoviedb.org/3/tv/top_rated?api_key=7666a18c935f4f574785edd530e93698";

  const allMovieGenres =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=7666a18c935f4f574785edd530e93698";

  const allTvGenres =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=7666a18c935f4f574785edd530e93698";

  // setting up all api calls with axios
  async function axiosFetch() {
    const trendingMediaApiCall = axios.get(trendingMedia);
    const recommendedMediaApiCall = axios.get(recommendedMedia);
    const allPopularMoviesApiCall = axios.get(allPopularMovies);
    const allTopRatedMoviesApiCall = axios.get(allPopularMovies);
    const allNowPlayingApiCall = axios.get(allNowPlaying);
    const allLatestTvApiCall = axios.get(allLatestTv);
    const allPopularTvApiCall = axios.get(allPopularTv);
    const allTopRatedTvApiCall = axios.get(allTopRatedTv);
    const allMovieGenresApiCall = axios.get(allMovieGenres);
    const allTvGenresApiCall = axios.get(allTvGenres);

    axios
      .all([
        trendingMediaApiCall,
        recommendedMediaApiCall,
        allPopularMoviesApiCall,
        allTopRatedMoviesApiCall,
        allNowPlayingApiCall,
        allLatestTvApiCall,
        allPopularTvApiCall,
        allTopRatedTvApiCall,
        allMovieGenresApiCall,
        allTvGenresApiCall,
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

          // tv show page data
          const allLatestTvData = allData[5].data;
          const allPopularTvData = allData[6].data;
          const allTopRatedTvData = allData[7].data;

          // bookmark page data
          const allMovieGenreData = allData[8].data;
          const allTvGenresData = allData[9].data;

          setMediaData({
            // home page data
            trendingData: trendMedia,
            recommended: recommendMedia,

            // movie page data
            popularMovies: allPopMovies,
            topRatedMovies: allTopRated,
            nowPlaying: allNowPlaying,

            // tv show page data
            latestTv: allLatestTvData,
            popularTv: allPopularTvData,
            topRatedTv: allTopRatedTvData,

            // bookmark page data
            movieGenres: allMovieGenreData,
            tvGenres: allTvGenresData,
          });
        })
      );
  }

  useEffect(() => {
    axiosFetch();
  }, []);

  return (
    <MovieApiContext.Provider
      value={{
        loading,
        trendingData,
        recommended,
        popularMovies,
        topRatedMovies,
        nowPlaying,
        latestTv,
        popularTv,
        topRatedTv,
        movieGenres,
        tvGenres,
        setLoading,
      }}
    >
      {children}
    </MovieApiContext.Provider>
  );
}

export default MovieApiContext;
