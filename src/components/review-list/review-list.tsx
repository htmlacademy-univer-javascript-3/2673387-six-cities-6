import ReviewItem from '../review-item/review-item.tsx';
import Review from '../../types/review.ts';
import {memo} from 'react';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewListInner({reviews}: ReviewListProps): JSX.Element {
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

const ReviewList = memo(ReviewListInner);

export default ReviewList;
