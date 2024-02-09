import PropTypes from "prop-types";
import castStyles from "./Cast.module.css";

const Cast = ({ castDetails, imageBaseUrlSmall }) => {
  const castList =
    castDetails.length === 0 ? (
      <p>We don&apos;t have information about cast for this movie</p>
    ) : (
      castDetails.map((actor) => (
        <li key={actor.id} className={castStyles.item}>
          <img
            src={imageBaseUrlSmall + actor.image}
            alt={actor.name}
            className={castStyles.image}
          />
          <p>{actor.name}</p>
          <p>{`Character: ${actor.character}`}</p>
        </li>
      ))
    );
  return (
    <>
      <h2 className={castStyles.header}>Cast</h2>
      {castList}
    </>
  );
};

Cast.propTypes = {
  castDetails: PropTypes.array,
  imageBaseUrlSmall: PropTypes.string,
};

export default Cast;
