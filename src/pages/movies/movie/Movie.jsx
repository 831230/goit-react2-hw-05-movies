import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate, Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

// function imports
import { fetchApiById, fetchApiConfig } from "../../../service/fetchFn.js";

import movieStyles from "./Movie.module.css";

const Movie = ({ handlingLoadingCast, handlingLoadingReviews }) => {
  const navigate = useNavigate();
  const [imageBaseUrlLarge, setImageBaseUrlLarge] = useState("");
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  
  const movieDetails = (
    <div>
      <div className={movieStyles.movieSpace}>
        <img
          src={details.image}
          alt={details.title}
          className={movieStyles.image}
        />
        <div className={movieStyles.description}>
          <h2 className={movieStyles.subHeader}>
            {details.title} {`(${details.year})`}
          </h2>
          <p>User Score: {details.userScore}</p>
          <h3 className={movieStyles.subHeader}>Overview</h3>
          <p>{details.overview}</p>
          <h4 className={movieStyles.subHeader}>Genres</h4>
          <p>
            {details.genres
              ? details.genres.map((genre) => genre.name).join(" ")
              : null}
          </p>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    fetchApiConfig()
      .then((image) => {
        setImageBaseUrlLarge(image.base_url + image.poster_sizes[3]);
      })
      .then(() => {
        fetchApiById(movieId).then((movie) => {
          if(!movie) navigate("/movies");
          const year = new Date(`${movie.data.release_date}`)
            .getFullYear()
            .toString();
          const userScore = Math.round(movie.data.vote_average * 10) + "%";
          const { poster_path, title, overview, genres } = movie.data;
          setDetails({
            image: imageBaseUrlLarge + poster_path,
            alt: title,
            title,
            year,
            userScore,
            overview,
            genres,
          });
        });
      })
      .catch(() => {
        navigate("/movies")
      })
  }, [imageBaseUrlLarge, movieId, navigate, location]);
  return (
    <div className={movieStyles.container}>
      <Link to={ location.state?.from?location.state.from:null} className={movieStyles.backLink}>
        go back
      </Link>
      {movieDetails}
      <div className={movieStyles.additional}>
        <h4 className={movieStyles.additionalHeader}>Additional information</h4>
        <ul>
          <li className={movieStyles.item}>
            <Link
              to="cast"
              onClick={() => handlingLoadingCast(movieId)}
              state={{ from: "/movies" }}
              className={movieStyles.link}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              onClick={() => handlingLoadingReviews(movieId)}
              state={{ from: "/movies" }}
              className={movieStyles.link}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

Movie.propTypes = {
  handlingLoadingCast: PropTypes.func,
  handlingLoadingReviews: PropTypes.func,
};

export default Movie;
