import React from "react";
import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image(item) {
  const [isloaded, setIsLoaded] = useState(false);
  const root = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(onIntersection, { threshold: 0 });
  //   observer.observe(root.current);

  //   function onIntersection(entries) {
  //     const { isIntersecting } = entries[0];

  //     if (isIntersecting) {
  //       observer.disconnect();
  //     }
  //   }
  // }, []);

  // function onLoad() {
  //   setIsLoaded((prev) => !prev);
  // }

  const backdropImg = `https://image.tmdb.org/t/p/original/${item.item.backdrop_path}`;
  const posterImg = `https://image.tmdb.org/t/p/original/${item.item.poster_path}`;

  return (
    <>
      {backdropImg ? (
        <LazyLoadImage
          className="img"
          src={backdropImg ? backdropImg : posterImg}
          alt={item.item.media_type}
          effect="blur"
          placeholder={<div className="loading"></div>}
          height="100%"
        />
      ) : (
        <div className="loading"></div>
      )}
    </>
  );
}

export default Image;
