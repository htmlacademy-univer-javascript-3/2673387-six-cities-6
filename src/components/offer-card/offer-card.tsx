import { Link } from 'react-router-dom';
import {Offer} from '../../types/offer.ts';
import {memo} from 'react';

type OfferCardProps = {
  offer: Offer;
  cardType: string;
  onMouseEnter: (offerId: string) => void;
  onMouseLeave: () => void;
}

function OfferCardInner({ offer, cardType, onMouseEnter, onMouseLeave }: OfferCardProps){

  const imgSize = cardType === 'favorites'
    ? { width: '150', height: '110' }
    : { width: '260', height: '200' };

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={() => onMouseEnter(offer.id)}
      onMouseLeave={() => onMouseLeave()}
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

const OfferCard = memo(OfferCardInner);

export default OfferCard;
