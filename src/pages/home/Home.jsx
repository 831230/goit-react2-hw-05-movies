import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import homeStyles from "./Home.module.css";

const Home = ({ trending }) => {
  // console.log(trending);
  const trendingList =
    trending.length === 0 ? (
      <p>Today we have not trending movies</p>
    ) : (
      trending.map((movie) => (
        <li key={movie.id} className={homeStyles.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: "/" }}
            className={homeStyles.link}
          >
            {movie.title}
          </Link>
        </li>
      ))
    );

  return (
    <div className={homeStyles.container}>
      <h2 className={homeStyles.header}>Trending today</h2>
      <ul>{trendingList}</ul>
    </div>
  );
};

Home.propTypes = { trending: PropTypes.array };

export default Home;
