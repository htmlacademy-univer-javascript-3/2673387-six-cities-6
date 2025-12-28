export type CityType = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'

export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: CityType;
  location: Location;
}

type OfferBase = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type Offer = OfferBase & {
  previewImage: string;
};

export type CurrentOffer = OfferBase & {
  description: string;
  images: string[];
  goods: string[];
  bedrooms: number;
  maxAdults: number;
  host: Host;
}
