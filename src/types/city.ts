import {CityType, Location} from './offer.ts';

export type City = {
  id: number;
  name: CityType;
  location: Location;
  zoom: number;
}
