import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import indexStyles from "./Index.module.css";

const Movies = ({ setInputValue, fetchApiKeyword, searchedMovies }) => {
  const searchedList =
    searchedMovies?.length === 0
      ? null
      : searchedMovies.map((movie) => (
          <li key={movie.id} className={indexStyles.item}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: "/movies" }}
              className={indexStyles.link}
            >
              {movie.title}
            </Link>
          </li>
        ));
  return (
    <div className={indexStyles.container}>
      <input
        type="text"
        name="search"
        onChange={setInputValue}
        className={indexStyles.input}
      />
      <button
        type="button"
        onClick={fetchApiKeyword}
        className={indexStyles.button}
      >
        Search
      </button>
      <ul>{searchedList}</ul>
    </div>
  );
};

Movies.propTypes = {
  setInputValue: PropTypes.func,
  fetchApiKeyword: PropTypes.func,
  searchedMovies: PropTypes.array,
};

export default Movies;
