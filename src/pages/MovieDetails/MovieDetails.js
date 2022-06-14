import { useContext, useEffect } from "react";
import MovieDetailsContext from "../../context/MovieDetailsContext";
import Image from "../../components/Image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../MovieDetails/moviedetails.css";

function MovieDetails() {
  const { type, media_id, data, credits, fetchDetails } =
    useContext(MovieDetailsContext);

  credits && console.log(credits);
  useEffect(() => {
    type && fetchDetails();
  }, []);

  function displayTopInfo() {
    // if result is a movie
    if (data.release_date) {
      return <p>{data.release_date.slice(0, 4)}</p>;
      // if result is a Tv show
    } else if (data.first_air_date) {
      return <p>{data.first_air_date.slice(0, 4)}</p>;
      // if movie/tv show hasn't released yet
    } else {
      return "N/A";
    }
  }

  function displayRuntime() {
    // if result is a movie
    if (data.runtime) {
      return <p>{data.runtime}m</p>;
      // if result is a Tv show
    } else if (data.episode_run_time) {
      return <p>{data.episode_run_time}m/Ep</p>;
      // if movie/tv show hasn't released yet
    } else {
      return "N/A";
    }
  }

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
              {/* // was able to conditionally render with function */}
              {displayTopInfo()}
              <div className="smallCircle"></div>
              {data.genres.map((genre) => (
                <p className="genreNames" key={genre.id}>
                  {genre.name}
                </p>
              ))}
              <div className="smallCircle"></div>
              {displayRuntime()}
            </div>
            <div className="overview">
              <h3>Overview:</h3>
              <p className="overviewText">{data.overview}</p>
            </div>
            {data.release_date || data.first_air_date ? (
              <div className="castAndCrew">
                <h3>Cast:</h3>
                <ul className="staffMembers">
                  {credits.cast.slice(0, 12).map((person) => (
                    <li className="mediaStaffMember" key={person.id}>
                      {person.name}
                    </li>
                  ))}
                </ul>
                <h3>Crew:</h3>
                <ul className="staffMembers">
                  {credits.crew.slice(0, 12).map((person) => (
                    <li className="mediaStaffMember" key={person.id}>
                      {person.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              "No cast and crew info at this time."
            )}
          </section>
        </>
      )}
    </main>
  );
}

export default MovieDetails;
