export type CityType = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'

export type OfferRentType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Location = {
  latitude: number;
  longitude: number;
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  isPremium: boolean;
  type: OfferRentType;
  rating: number;
  price: number;
  images: string[];
  goods: string[];
  bedrooms: number;
  maxAdults: number;
  host: Host;
  city: CityType;
  location: Location;
};

