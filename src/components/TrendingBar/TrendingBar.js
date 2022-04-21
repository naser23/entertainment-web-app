import React from "react";
import { useState, useContext } from "react";
import MovieApiContext from "../../context/MovieApiContext";

function TrendingBar() {
  const [trending, setTrending] = useState([]);
  const { data } = useContext(MovieApiContext);

  // data && data.map((piece) => piece.isTrending && console.log(piece));

  return <div className="header">TrendingBar</div>;
}

export default TrendingBar;
