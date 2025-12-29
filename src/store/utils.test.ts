import { sortOffers } from './utils';
import { SortOptions } from '../const';
import { Offer } from '../types/offer';

describe('Function: sortOffers', () => {
  const offerA = { price: 100, rating: 3 } as Offer;
  const offerB = { price: 200, rating: 5 } as Offer;
  const offerC = { price: 300, rating: 4 } as Offer;
  const offers = [offerA, offerB, offerC];

  it('should sort by Price: Low to High', () => {
    const sorted = sortOffers(offers, SortOptions.PriceLowToHigh);
    expect(sorted).toEqual([offerA, offerB, offerC]);
  });

  it('should sort by Price: High to Low', () => {
    const sorted = sortOffers(offers, SortOptions.PriceHighToLow);
    expect(sorted).toEqual([offerC, offerB, offerA]);
  });

  it('should sort by Top Rated', () => {
    const sorted = sortOffers(offers, SortOptions.TopRatedFirst);
    expect(sorted).toEqual([offerB, offerC, offerA]);
  });

  it('should return default order for Popular', () => {
    const sorted = sortOffers(offers, SortOptions.Popular);
    expect(sorted).toEqual(offers);
  });
});
