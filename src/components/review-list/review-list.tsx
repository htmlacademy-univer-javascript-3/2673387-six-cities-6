import ReviewItem from '../review-item/review-item.tsx';
import Review from '../../types/review.ts';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </section>
  );
}

export default ReviewList;
