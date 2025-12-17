import { useState, ChangeEvent, FormEvent, Fragment } from 'react';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;
const RATING_STARS = [5, 4, 3, 2, 1];
const RATING_TITLES: { [key: number]: string } = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? Number(value) : value,
    });
  };

  const isFormValid =
    formData.rating > 0 &&
    formData.review.length >= MIN_REVIEW_LENGTH &&
    formData.review.length <= MAX_REVIEW_LENGTH;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isFormValid) {
      // eslint-disable-next-line no-console
      console.log('Form submitted:', formData);

      setFormData({ rating: 0, review: '' });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map((starValue) => (
          <Fragment key={starValue}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={starValue}
              id={`${starValue}-stars`}
              type="radio"
              checked={formData.rating === starValue}
              onChange={handleFieldChange}
            />
            <label htmlFor={`${starValue}-stars`} className="reviews__rating-label form__rating-label" title={RATING_TITLES[starValue]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleFieldChange}
        maxLength={MAX_REVIEW_LENGTH}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
