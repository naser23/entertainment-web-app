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
    <main className="mediaDetailsContainer">
      {data ? (
        <LazyLoadImage
          className="mediaDetailsImg"
          src={posterImg}
          alt={type}
          effect="blur"
          placeholder={<div className="loading"></div>}
          height="100%"
        />
      ) : (
        <div className="loading"></div>
      )}
      <section className="infoSection">
        <h1 className="mediaDetailsTitle">
          {data && (data.title ? data.title : data.name)}
        </h1>
        <div className="releaseInfo">
          {data &&
            (type == "movie" ? (
              // if user clicks on movie, display this text.
              <p>Release Date: {data.release_date}</p>
            ) : (
              // else if tv show, display this text
              <>
                <p>First episode aired on: {data.first_air_date}.</p>
                <p>Latest episode aired on: {data.last_air_date}</p>
              </>
            ))}
        </div>
      </section>
    </main>
  );
}

export default MovieDetails;
