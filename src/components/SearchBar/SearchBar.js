import React from "react";
import SearchIcon from "../../assets/icon-search.svg";

function SearchBar() {
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <div className="searchContainer">
        <img className="searchIcon" src={SearchIcon} alt="search icon" />
        <input
          className="searchBar"
          type="text"
          placeholder="Search for movies or TV shows"
        />
      </div>
    </form>
  );
}

export default SearchBar;
