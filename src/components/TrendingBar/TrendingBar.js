import React from "react";
import { useState, useContext } from "react";
import { useEffect } from "react";
import MovieApiContext from "../../context/MovieApiContext";

function TrendingBar() {
  const [trending, setTrending] = useState([]);
  const { data, loading, getData } = useContext(MovieApiContext);

  useEffect(() => {
    getData();
  }, []);

  // to get the list of movies that are in theaters: https://imdb-api.com/en/API/InTheaters/k_12345678

  return (
    <div className="trendingBar">
      <h1 className="trendingHeader">Trending</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="trendingItemContainer">
          {data &&
            data.map(
              (item) =>
                item.isTrending && (
                  <li key={data.indexOf(item)} className="trendingItem">
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                  </li>
                )
            )}
        </ul>
      )}
    </div>
  );
}

export default TrendingBar;
