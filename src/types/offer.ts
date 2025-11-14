type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Offer = {
  id: string;
  title: string;
  description: string;
  isPremium: boolean;
  type: string;
  rating: number;
  price: number;
  images: string[];
  goods: string[];
  bedrooms: number;
  maxAdults: number;
  host: Host;
  city: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export default Offer;
export type { Host };
