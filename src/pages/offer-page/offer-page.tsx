import { Link, useParams } from 'react-router-dom';
import { Offer } from '../../types/offer.ts';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import OfferList from '../../components/offer-list/offer-list.tsx';
import { MOCKED_REVIEWS } from '../../mocks/reviews.ts';
import ReviewList from '../../components/review-list/review-list.tsx';
import ReviewsForm from '../../components/reviews-form/reviews-form.tsx';
import Map from '../../components/map/map.tsx';
import { useState } from 'react';
import {CITIES_LIST} from '../../mocks/cities.ts';

type OfferPageProps = {
  offers: Offer[];
}

function OfferPage({ offers }: OfferPageProps): JSX.Element {
  const { offerId } = useParams<{ offerId: string }>();
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleCardHover = (id: string | null) => {
    setActiveOfferId(id);
  };

  const currentOffer = offers.find((offer) => offer.id === offerId);

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const nearbyOffers = offers
    .filter((offer) => offer.city === currentOffer.city && offer.id !== currentOffer.id)
    .slice(0, 3);

  const nearbyOfferLocations = nearbyOffers.map((offer) => offer.location);

  const activeOffer = nearbyOffers.find((offer) => offer.id === activeOfferId);
  const activeLocation = activeOffer ? activeOffer.location : null;

  const mapLocations = [...nearbyOfferLocations, currentOffer.location];

  const reviews = MOCKED_REVIEWS
    .filter((review) => review.offerId === offerId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const {
    images,
    title,
    description,
    isPremium,
    type,
    rating,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
  } = currentOffer;

  const mapCity = CITIES_LIST.find((city) => city.name === currentOffer.city);

  if (!mapCity) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/login">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.slice(0, 6).map((imageSrc) => (
                <div key={imageSrc} className="offer__image-wrapper">
                  <img className="offer__image" src={imageSrc} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="offer__inside-item">{good}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <ReviewList reviews={reviews} />
              <ReviewsForm />
            </div>
          </div>
          <section className="offer__map map">
            <Map city={mapCity} locations={mapLocations} activeLocation={activeLocation} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList cardType={'near-places'} offers={nearbyOffers} onCardHover={handleCardHover} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
