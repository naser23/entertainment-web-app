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
    type && fetchDetails();
  }, []);

  const backdrop_path = `https://image.tmdb.org/t/p/original/${
    data && data.backdrop_path
  }`;
  const posterImg = `https://image.tmdb.org/t/p/original/${
    data && data.poster_path
  }`;
  return (
    <main className="mediaDetailsContainer">
      {data && (
        <>
          <LazyLoadImage
            className="mediaDetailsImg"
            src={posterImg}
            alt={type}
            effect="blur"
            placeholder={<div className="loading"></div>}
            height="100%"
          />
          <section className="infoSection">
            {/* // header and tagline */}
            <h1 className="mediaDetailsTitle">
              {/* tell whether it's a movie or a tv show */}
              {data.title ? data.title : data.name}
            </h1>
            <p className="tagline">"{data.tagline}"</p>

            <div className="topInfo">
              <p>
                {data
                  ? // check if movie/tv show has released
                    data.release_date
                    ? data.release_date.slice(0, 4)
                    : data.first_air_date.slice(0, 4)
                  : // if it hasn't released then return this.
                    "N/A"}
              </p>

              <div className="smallCircle"></div>
              {data.genres.map((genre) => (
                <p className="genreNames" key={genre.id}>
                  {genre.name}
                </p>
              ))}
              <div className="smallCircle"></div>

              <p>
                {data
                  ? // check if movie/tv show has released
                    data.release_date
                    ? data.runtime
                    : data.episode_run_time[0]
                  : // if it hasn't released then return this.
                    "N/A"}
                m
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default MovieDetails;
