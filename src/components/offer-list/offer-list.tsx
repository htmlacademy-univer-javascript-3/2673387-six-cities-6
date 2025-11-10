import Offer from '../../types/offer.ts';
import PlaceCard from '../place-card/place-card.tsx';

type OfferListProps = {
  offers: Offer[];
}

function OfferList({offers}: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard offer={offer} key={offer.id} />
      ))}
    </div>);
}

export default OfferList;
