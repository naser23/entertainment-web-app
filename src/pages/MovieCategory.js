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
  const {
    categoryMovieResults,
    pageNumber,
    setPageNumber,
    searchPagination,
    discoverMovieData,
    movieCategoryPagePagination,
  } = useContext(SearchResultsContext);

  const { type, media_id, setMovieDetails } = useContext(MovieDetailsContext);
  const navigate = useNavigate();
  const { media_type, id } = useParams();

  useEffect(() => {
    // if the user has searched for results then searchPagination will run.
    categoryMovieResults && movieCategoryPagePagination(pageNumber);
  }, [pageNumber]);

  if (categoryMovieResults && categoryMovieResults.length == 0) {
    return (
      <main className="pageContainer">
        <h1 className="header">Results for Query</h1>
        <p>No Results...</p>
      </main>
    );
  }

  {
    categoryMovieResults &&
      categoryMovieResults.results.map((item) => console.log(item));
  }

  function upOnePage() {
    if (pageNumber >= 1 && pageNumber < categoryMovieResults.total_pages) {
      setPageNumber(() => pageNumber + 1);
    }
  }

  function downOnePage() {
    if (pageNumber > 1 && pageNumber <= categoryMovieResults.total_pages) {
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

  return (
    <>
      <main className="pageContainer">
        <h1 className="header">Results for Genre</h1>
        <ul className="mediaContainer">
          {categoryMovieResults &&
            categoryMovieResults.results.map((item) => (
              <li
                className="mediaItem"
                key={item.id}
                onClick={() => getMediaDetails(item)}
              >
                <Image item={item} />
                <div className="mediaItemFacts">
                  <p>{item.release_date.slice(0, 4)}</p>
                  <span className="smallCircle"></span>
                  <div className="itemCategory">
                    <img src={MovieIcon} alt="Media Type Icon" />
                    <p>{item.category}</p>
                  </div>
                  <div className="smallCircle"></div>
                  <p>{item.vote_average}</p>
                </div>
                <h3 className="mediaTitle">{item.title}</h3>
                <div className="playButtonContainer">
                  <div className="playButton">
                    <img src={PlayIcon} alt="Play-icon" />
                    <p>Play</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        {categoryMovieResults && (
          <div className="changePageContainer">
            <div className="changePageBackground">
              <button className="prevPage" onClick={downOnePage}>
                Prev Page
              </button>
              <div className="currentPage">
                Page {pageNumber} of
                {categoryMovieResults && categoryMovieResults.total_pages}
              </div>
              <button className="nextPage" onClick={upOnePage}>
                Next Page
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default MovieCategory;
