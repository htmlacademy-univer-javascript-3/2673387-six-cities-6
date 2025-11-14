import Offer from '../../types/offer.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import {useState} from 'react';

type OfferListProps = {
  offers: Offer[];
}

function OfferList({offers}: OfferListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleCardMouseEnter = (offerId: string) => {
    setActiveOfferId(offerId);
  };

  const handleCardMouseLeave = () => {
    setActiveOfferId(null);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>);
}

export default OfferList;
