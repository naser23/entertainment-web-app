import React from "react";
import SearchIcon from "../../assets/icon-search.svg";
import MovieApiContext from "../../context/MovieApiContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsonData } from "../../data";
import "../SearchBar/searchbar.css";

function SearchBar() {
  const [text, setText] = useState("");
  const { getData, resultsData } = useContext(MovieApiContext);
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    if (text === "") {
      alert("Please type something");
      console.log("Please type something");
    } else {
      getData(text);
      navigate("/results");
      setText("");
    }
  }

  function onChange(e) {
    setText(e.target.value);
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
