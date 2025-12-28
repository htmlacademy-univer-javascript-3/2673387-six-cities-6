import {City} from '../types/offer.ts';

export const PARIS: City = {
  name: 'Paris',
  location: {
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 12,
  },
};

export const AMSTERDAM: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.378,
    longitude: 4.89,
    zoom: 12,
  },
};

export const CITIES_LIST: City[] = [PARIS, AMSTERDAM, ];

