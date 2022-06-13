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
        {/* // header and tagline */}
        <h1 className="mediaDetailsTitle">
          {/* tell whether it's a movie or a tv show */}
          {data && (data.title ? data.title : data.name)}
        </h1>
        {data && <p className="tagline">"{data.tagline}"</p>}

        <div className="topInfo">
          {data &&
            (type == "movie" ? (
              // if user clicks on movie, display this text.
              <p>
                Release Date: {data.release_date ? data.release_date : "N/A"}
              </p>
            ) : (
              // else if tv show, display this text
              <>
                <p>
                  {data.first_air_date
                    ? data.first_air_date.slice(0, 4)
                    : "N/A"}
                </p>
              </>
            ))}

          <div className="smallCircle"></div>
          {data &&
            data.genres.map((genre) => (
              <p className="genreNames" key={genre.id}>
                {genre.name}
              </p>
            ))}
        </div>
      </section>
    </main>
  );
}

export default MovieDetails;
