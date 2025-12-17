import {CityType, Location} from './offer.ts';

export type City = {
  name: CityType;
  location: Location;
  zoom: number;
}
