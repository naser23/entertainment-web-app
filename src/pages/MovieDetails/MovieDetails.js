import { useContext, useEffect } from "react";
import MovieDetailsContext from "../../context/MovieDetailsContext";
import Image from "../../components/Image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../MovieDetails/moviedetails.css";

function MovieDetails() {
  const { type, media_id, data, credits, fetchDetails } =
    useContext(MovieDetailsContext);

  data && console.log(data);
  useEffect(() => {
    fetchDetails();
  }, []);

  const backdrop_path = `https://image.tmdb.org/t/p/original/${
    data && data.backdrop_path
  }`;
  const posterImg = `https://image.tmdb.org/t/p/original/${
    data && data.poster_path
  }`;
  return (
    <main className="movieDetailsContainer">
      <section className="topSection">
        <h2 className="movieTitle">{data && data.title}</h2>
        {data ? (
          <LazyLoadImage
            className="img"
            src={posterImg}
            alt={type}
            effect="blur"
            placeholder={<div className="loading"></div>}
            height="100%"
          />
        ) : (
          <div className="loading"></div>
        )}
      </section>
    </main>
  );
}

export default MovieDetails;
