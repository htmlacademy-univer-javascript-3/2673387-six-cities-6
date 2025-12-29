import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFavoriteAction } from '../../store/api-action';
import { AppRoute, AuthStatus, SliceType } from '../../const';

type OfferCardProps = {
  offer: Offer;
  cardType: 'cities' | 'favorites' | 'near-places';
  onMouseEnter?: (offerId: string) => void;
  onMouseLeave?: () => void;
}

function OfferCardInner({ offer, cardType, onMouseEnter, onMouseLeave }: OfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector((state) => state[SliceType.User].authorizationStatus);

  const imgSize = cardType === 'favorites'
    ? { width: '150', height: '110' }
    : { width: '260', height: '200' };

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthStatus.Authorised) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(setFavoriteAction({
      offerId: offer.id,
      status: offer.isFavorite ? 0 : 1
    }));
  };

  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter(offer.id);
    }
  };

  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imgSize.width}
            height={imgSize.height}
            alt={offer.title}
          />
        </Link>
      </div>

      <div className={`place-card__info ${cardType === 'favorites' ? 'favorites__card-info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(Math.round(offer.rating) / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>

        <p className="place-card__type" style={{ textTransform: 'capitalize' }}>
          {offer.type}
        </p>
      </div>
    </article>
  );
}

const OfferCard = memo(OfferCardInner);

export default OfferCard;
