import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferList from '../../components/offer-list/offer-list';
import ReviewList from '../../components/review-list/review-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import Map from '../../components/map/map';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthStatus, SliceType, AppRoute } from '../../const';
import {
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchReviewsAction,
  setFavoriteAction
} from '../../store/api-action';

function OfferPage(): JSX.Element {
  const { offerId } = useParams<{ offerId: string }>();
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentOffer = useAppSelector((state) => state[SliceType.Offers].currentOffer);
  const reviews = useAppSelector((state) => state[SliceType.Offers].reviews);
  const nearbyOffers = useAppSelector((state) => state[SliceType.Offers].nearbyOffers);
  const isOfferLoading = useAppSelector((state) => state[SliceType.Offers].isCurrentOfferLoading);
  const authorizationStatus = useAppSelector((state) => state[SliceType.User].authorizationStatus);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchReviewsAction(offerId));
      dispatch(fetchNearbyOffersAction(offerId));
    }
  }, [dispatch, offerId]);


  const handleCardHover = useCallback((id: string | null) => {
    setActiveOfferId(id);
  }, []);

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthStatus.Authorised) {
      navigate(AppRoute.Login);
      return;
    }

    if (currentOffer) {
      dispatch(setFavoriteAction({
        offerId: currentOffer.id,
        status: currentOffer.isFavorite ? 0 : 1
      }));
    }
  };

  if (isOfferLoading) {
    return <LoadingScreen />;
  }

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const nearbyOffersToRender = nearbyOffers.slice(0, 3);
  const nearbyOfferLocations = nearbyOffersToRender.map((offer) => offer.location);
  const activeNearbyOffer = nearbyOffersToRender.find((offer) => offer.id === activeOfferId);
  const activeLocation = activeNearbyOffer ? activeNearbyOffer.location : currentOffer.location;
  const mapLocations = [...nearbyOfferLocations, currentOffer.location];
  const mapCity = currentOffer.city;

  const reviewsToRender = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images.slice(0, 6).map((imageSrc) => (
                <div key={imageSrc} className="offer__image-wrapper">
                  <img className="offer__image" src={imageSrc} alt={currentOffer.title} />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{currentOffer.title}</h1>

                <button
                  className={`offer__bookmark-button button ${currentOffer.isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={handleFavoriteClick}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    {currentOffer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(Math.round(currentOffer.rating) / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>

              <ul className="offer__features">
                <li
                  className="offer__feature offer__feature--entire"
                  style={{ textTransform: 'capitalize' }}
                >{currentOffer.type}
                </li>
                <ul className="offer__features">
                  <li
                    className="offer__feature offer__feature--entire"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {currentOffer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {currentOffer.bedrooms} Bedroom{currentOffer.bedrooms > 1 ? 's' : ''}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {currentOffer.maxAdults} adult{currentOffer.maxAdults > 1 ? 's' : ''}
                  </li>
                </ul>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((good) => (
                    <li key={good} className="offer__inside-item">{good}</li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${currentOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">{currentOffer.host.name}</span>
                  {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{currentOffer.description}</p>
                </div>
              </div>

              <ReviewList reviews={reviewsToRender} />
              {authorizationStatus === AuthStatus.Authorised && <ReviewsForm />}
            </div>
          </div>

          <Map
            className="offer__map"
            city={mapCity}
            locations={mapLocations}
            activeLocation={activeLocation}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList
              cardType={'near-places'}
              offers={nearbyOffersToRender}
              onCardHover={handleCardHover}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
