import React from "react";
import { useState, useContext } from "react";
import { useEffect } from "react";
import MovieApiContext from "../../context/MovieApiContext";
import { jsonData } from "../../data";
import background from "../../assets/thumbnails/beyond-earth/trending/small.jpg";

function TrendingBar() {
  const [trending, setTrending] = useState([]);
  const { data, loading, getData } = useContext(MovieApiContext);
  console.log(jsonData);

  // useEffect(() => {
  //   // getData();
  //   // data && data.map((item) => item.isTrending && console.log(item.thumbnail));
  // }, []);

  return (
    <div className="trendingBar">
      <h1 className="trendingHeader">Trending</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="trendingItemContainer">
          {jsonData &&
            jsonData.map(
              (item) =>
                item.isTrending && (
                  <li
                    key={jsonData.indexOf(item)}
                    className="trendingItem"
                    style={{
                      backgroundImage: `url(${item.thumbnail.regular.large})`,
                    }}
                  >
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <p>{item.year}</p>
                    <p>{item.rating}</p>
                  </li>
                )
            )}
        </ul>
      )}
    </div>
  );
}

export default TrendingBar;
