import React from "react";
import SearchIcon from "../../assets/icon-search.svg";
import MovieApiContext from "../../context/MovieApiContext";
import { useContext, useState } from "react";
import { jsonData } from "../../data";

function SearchBar() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  function onSubmit(e) {
    e.preventDefault();

    if (text === "") {
      alert("Please type something");
      console.log("Please type something");
    } else {
      // clear the results array before searching
      setResults([]);

      // filtering out the data based on the text state
      setResults(
        jsonData.filter((jsonData) =>
          jsonData.title.toLowerCase().includes(text.toLowerCase())
        )
      );
      console.log(results);
      setText("");
    }
  }

  function onChange(e) {
    setText(e.target.value);
    console.log(text);
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
