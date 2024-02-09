import PropTypes from "prop-types";
import reviewsStyles from "./Reviews.module.css";

const Reviews = ({ reviewsDetails }) => {
  const reviewsList =
    reviewsDetails.length === 0 ? (
      <p>We don&apos;t have any reviews for this movie</p>
    ) : (
      reviewsDetails.map((review) => (
        <li key={review.id} className={reviewsStyles.item}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))
    );
  return (
    <>
      <h2 className={reviewsStyles.header}>Reviews</h2>
      {reviewsList}
    </>
  );
};

Reviews.propTypes = {
  reviewsDetails: PropTypes.array,
};

export default Reviews;
