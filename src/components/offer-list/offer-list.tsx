import OfferCard from '../offer-card/offer-card.tsx';
import {Offer} from '../../types/offer.ts';

type OfferListProps = {
  offers: Offer[];
  onCardHover?: (offerId: string | null) => void;
}

function OfferList({offers, onCardHover}: OfferListProps): JSX.Element {
  const handleCardMouseEnter = (offerId: string) => {
    onCardHover?.(offerId);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onMouseEnter={handleCardMouseEnter}
        />
      ))}
    </div>);
}

export default OfferList;
