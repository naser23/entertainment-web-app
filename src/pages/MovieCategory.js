import React from "react";
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../assets/icon-bookmark-full.svg";
import MovieIcon from "../assets/icon-category-movie.svg";
import TvIcon from "../assets/icon-category-tv.svg";
import PlayIcon from "../assets/icon-play.svg";
import SearchResultsContext from "../context/SearchResultsContext";
import MovieDetailsContext from "../context/MovieDetailsContext";
import Image from "../components/Image";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MovieCategory() {
  const { results, pageNumber, setPageNumber, searchPagination } =
    useContext(SearchResultsContext);

  const { type, media_id, setMovieDetails } = useContext(MovieDetailsContext);
  const navigate = useNavigate();
  const { media_type, id } = useParams();

  useEffect(() => {
    // if the user has searched for results then searchPagination will run.
    results && searchPagination(pageNumber);
  }, [pageNumber]);

  // useEffect(() => {
  //   results && console.log(results);
  // }, []);

  if (results && results.length == 0) {
    return (
      <main className="pageContainer">
        <h1 className="header">Results for Query</h1>
        <p>No Results...</p>
      </main>
    );
  }

  function upOnePage() {
    if (pageNumber >= 1 && pageNumber < results.total_pages) {
      setPageNumber(() => pageNumber + 1);
    }
  }

  function downOnePage() {
    if (pageNumber > 1 && pageNumber <= results.total_pages) {
      setPageNumber(() => pageNumber - 1);
    }
  }

  function getMediaDetails(item) {
    setMovieDetails({
      type: "movie",
      media_id: item.id,
    });
    navigate(`/movie/${item.id}`);
  }
  return <></>;
}

export default MovieCategory;
