import React from "react";
import { useState, useContext } from "react";
import MovieApiContext from "../../context/MovieApiContext";

function TrendingBar() {
  const [media, setMedia] = useState([]);
  const { data, loading, getInTheatersData } = useContext(MovieApiContext);

  // data && data.map((piece) => piece.isTrending && console.log(piece));

  // to get the list of movies that are in theaters: https://imdb-api.com/en/API/InTheaters/k_12345678

  return (
    <div className="trendingBar">
      <h1 className="trendingHeader">Trending</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="trendingItemContainer">
          {data &&
            data.results.map((item) => (
              <li key={item.id} className="trendingItem">
                item
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default TrendingBar;
