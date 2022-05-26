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
  const { data, getData, pageNumber, setPageNumber } =
    useContext(MovieApiContext);
  data && console.log(pageNumber, data.total_pages);

  if (data && data.results.length == 0) {
    return (
      <main className="pageContainer">
        <h1 className="header">Results for Search</h1>
        <p>No Results...</p>
      </main>
    );
  }

  function upOnePage() {
    if (pageNumber >= 1 && pageNumber < data.total_pages) {
      setPageNumber(pageNumber + 1);
    }
  }

  function downOnePage() {
    if (pageNumber > 1 && pageNumber <= data.total_pages) {
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <>
      <main className="pageContainer">
        <h1 className="header">Results for Search</h1>
        <ul className="mediaContainer">
          {data &&
            data.results.map((item) => (
              <li className="mediaItem" key={item.id}>
                <img
                  className="img"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.media_type === "movie" ? "Movie Icon" : "Tv Icon"}
                />

                <button className="mediaBookmarkButton">
                  <img src={BookmarkIconEmpty} alt="Bookmark Icon" />
                </button>
                <div className="mediaItemFacts">
                  <p>
                    {item.media_type == "movie"
                      ? item.release_date
                      : item.first_air_date}
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
        <div className="changePageContainer">
          <button className="prevPage" onClick={downOnePage}>
            Prev Page
          </button>
          <div className="currentPage">
            Page {pageNumber} of {data && data.total_pages}
          </div>
          <button className="nextPage" onClick={upOnePage}>
            Next Page
          </button>
        </div>
      </main>
    </>
  );
}

export default SearchResults;
