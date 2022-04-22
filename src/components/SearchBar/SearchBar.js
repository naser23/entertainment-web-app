import React from "react";
import SearchIcon from "../../assets/icon-search.svg";
import MovieApiContext from "../../context/MovieApiContext";
import { useContext, useState } from "react";

function SearchBar() {
  const [text, setText] = useState("");
  const { data, getData } = useContext(MovieApiContext);

  function onSubmit(e) {
    e.preventDefault();

    if (text === "") {
      alert("Please type something");
      console.log("Please type something");
    } else {
      getData(text);
      setText("");
    }
  }

  function onChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }

  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <div className="searchContainer">
        <img className="searchIcon" src={SearchIcon} alt="search icon" />
        <input
          className="searchBar"
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Search for movies or TV shows"
        />
      </div>
    </form>
  );
}

export default SearchBar;
