import {SortOptions} from '../const.ts';
import {Offer} from '../types/offer.ts';

export const sortOffers = (offers: Offer[], sortOptions: SortOptions): Offer[] => {
  switch (sortOptions) {
    case SortOptions.PriceLowToHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortOptions.PriceHighToLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortOptions.TopRatedFirst:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return [...offers];
  }
};
