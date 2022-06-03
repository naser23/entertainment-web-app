import React from "react";
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../assets/icon-bookmark-full.svg";
import MovieIcon from "../assets/icon-category-movie.svg";
import TvIcon from "../assets/icon-category-tv.svg";
import PlayIcon from "../assets/icon-play.svg";
import MovieApiContext from "../context/MovieApiContext";
import { useContext } from "react";
import { jsonData } from "../data";

function SearchResults() {
  const { searchData, pageNumber, setPageNumber } = useContext(MovieApiContext);

  if (searchData && searchData.results.length == 0) {
    return (
      <main className="pageContainer">
        <h1 className="header">Results for Search</h1>
        <p>No Results...</p>
      </main>
    );
  }

  function upOnePage() {
    if (pageNumber >= 1 && pageNumber < searchData.total_pages) {
      setPageNumber((prevState) => prevState + 1);
      console.log(pageNumber);
      // queryThroughPages();
    }
  }

  function downOnePage() {
    if (pageNumber > 1 && pageNumber <= searchData.total_pages) {
      setPageNumber((prevState) => prevState - 1);
      console.log(pageNumber);
    }
  }

  return (
    <>
      <main className="pageContainer">
        <h1 className="header">Results for Search</h1>
        <ul className="mediaContainer">
          {searchData &&
            searchData.results.map((item) => (
              <li className="mediaItem" key={item.id}>
                <img
                  className="img"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.media_type === "movie" ? "Movie Icon" : "Tv Icon"}
                />
                <div className="mediaItemFacts">
                  <p>
                    {item.media_type == "movie"
                      ? item.release_date.slice(0, 4)
                      : // checking if the show has aired before splicing the string.
                        item.first_air_date && item.first_air_date.slice(0, 4)}
                  </p>
                  <div className="smallCircle"></div>
                  <span className="itemCategory">
                    <img
                      src={item.media_type === "movie" ? MovieIcon : TvIcon}
                      alt="Media Type Icon"
                    />
                    <p>{item.category}</p>
                  </span>
                  <div className="smallCircle"></div>
                  <p>{item.vote_average}</p>
                </div>
                <h3 className="mediaTitle">
                  {item.media_type == "movie" ? item.title : item.name}
                </h3>
                <div className="playButtonContainer">
                  <div className="playButton">
                    <img src={PlayIcon} alt="Play-icon" />
                    <p>Play</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        {searchData && (
          <div className="changePageContainer">
            <div className="changePageBackground">
              <button className="prevPage" onClick={downOnePage}>
                Prev Page
              </button>
              <div className="currentPage">
                Page {pageNumber} of {searchData && searchData.total_pages}
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

export default SearchResults;
