import React from "react";
import { useState, useContext } from "react";
import MovieApiContext from "../../context/MovieApiContext";
import MediaItem from "../MediaItem/MediaItem";

function TrendingBar() {
  const [media, setMedia] = useState([]);
  const { data } = useContext(MovieApiContext);

  // data && data.map((piece) => piece.isTrending && console.log(piece));

  return (
    <div className="header">
      <ul>{data && data.results.map((item) => <MediaItem item={item} />)}</ul>
    </div>
  );
}

export default TrendingBar;
