import OfferCard from '../offer-card/offer-card.tsx';
import {Offer} from '../../types/offer.ts';

export type OfferListType = 'cities' | 'favorites' | 'near-places';

type OfferListProps = {
  offers: Offer[];
  cardType: OfferListType;
  onCardHover?: (offerId: string | null) => void;
}

const listClassNames: Record<OfferListType, string> = {
  'cities': 'cities__places-list places__list tabs__content',
  'favorites': 'favorites__list',
  'near-places': 'near-places__list places__list',
};

function OfferList({offers, cardType, onCardHover}: OfferListProps): JSX.Element {
  const handleCardMouseEnter = (offerId: string) => {
    onCardHover?.(offerId);
  };
  return (
    <div className={listClassNames[cardType]}>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onMouseEnter={handleCardMouseEnter}
          cardType={cardType}
        />
      ))}
    </div>);
}

export default OfferList;
