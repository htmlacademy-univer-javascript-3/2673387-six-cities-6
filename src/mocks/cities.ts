import {City} from '../types/offer.ts';

export const PARIS: City = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
};

export const COLOGNE: City = {
  name: 'Cologne',
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
};

export const BRUSSELS: City = {
  name: 'Brussels',
  location: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
};

export const AMSTERDAM: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
};

export const HAMBURG: City = {
  name: 'Hamburg',
  location: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
};

export const DUSSELDORF: City = {
  name: 'Dusseldorf',
  location: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  },
};

export const CITIES_LIST: City[] = [PARIS, COLOGNE, BRUSSELS, AMSTERDAM, HAMBURG, DUSSELDORF];
