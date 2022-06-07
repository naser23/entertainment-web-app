import React from "react";
import { useState, useEffect, useRef } from "react";

function Image(item) {
  const [isloaded, setIsLoaded] = useState(false);
  const root = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, { threshold: 0 });
    observer.observe(root.current);

    function onIntersection(entries) {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        observer.disconnect();
      }
    }
  }, []);

  function onLoad() {
    setIsLoaded((prev) => !prev);
  }

  return (
    <>
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        alt={item.media_type}
        loading="lazy"
      />
    </>
  );
}

export default Image;
