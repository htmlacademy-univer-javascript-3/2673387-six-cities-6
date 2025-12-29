import {City} from './types/offer.ts';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

export enum Cities {
  Amsterdam = 'Amsterdam',
  Brussels = 'Brussels',
  Cologne = 'Cologne',
  Dusseldorf = 'Dusseldorf',
  Hamburg = 'Hamburg',
  Paris = 'Paris'
}


export enum AuthStatus {
  NotAuthorised = 'NotAuthorised',
  Authorised = 'Authorised',
}

export enum SortOptions {
  Popular = 'Popular',
  PriceLowToHigh = 'Price Low To High',
  PriceHighToLow = 'Price High To Low',
  TopRatedFirst = 'Top Rated First',
}

export const CITIES_LIST: City[] = [
  {
    name: Cities.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: Cities.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: Cities.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: Cities.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: Cities.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: Cities.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];

export enum SliceType {
  App = 'APP',
  User = 'USER',
  Offers = 'Offers',
}
