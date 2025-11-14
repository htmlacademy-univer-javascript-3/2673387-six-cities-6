import type Offer from '../types/offer';
import { Host } from '../types/offer';

const HOSTS: Record<string, Host> = {
  'angelina': {
    name: 'Angelina',
    avatarUrl: 'https://i.pravatar.cc/74?u=angelina',
    isPro: true,
  },
  'max': {
    name: 'Max',
    avatarUrl: 'https://i.pravatar.cc/74?u=max',
    isPro: false,
  },
};

export const MOCKED_OFFERS: Offer[] = [
  {
    id: 'b81d77cc-5a7a-4c2d-9477-802513a0e623',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: true,
    type: 'Apartment',
    rating: 4.8,
    price: 120,
    images: [
      'https://placehold.co/260x200/4F46E5/FFFFFF?text=Premium_Flat_1',
      'https://placehold.co/260x200/4F46E5/FFFFFF?text=Premium_Flat_2',
      'https://placehold.co/260x200/4F46E5/FFFFFF?text=Premium_Flat_3',
      'https://placehold.co/260x200/4F46E5/FFFFFF?text=Premium_Flat_4',
    ],
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Towels'],
    bedrooms: 3,
    maxAdults: 4,
    host: HOSTS['angelina'],
    city: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
  },
  {
    id: 'f56c9d2f-4a3b-4c1e-8e5f-170f05a1e2f3',
    title: 'Private Room in the City Center',
    description: 'A simple but cozy private room right in the heart of the city. Perfect for solo travelers or couples looking for a central base to explore.',
    isPremium: false,
    type: 'Private Room',
    rating: 4.2,
    price: 80,
    images: [
      'https://placehold.co/260x200/9CA3AF/FFFFFF?text=Private_Room_1',
      'https://placehold.co/260x200/9CA3AF/FFFFFF?text=Private_Room_2',
    ],
    goods: ['Wi-Fi', 'Heating', 'Towels'],
    bedrooms: 1,
    maxAdults: 2,
    host: HOSTS['max'],
    city: 'Amsterdam',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
    },
  },
  {
    id: 'a0e3b1c5-2d4e-4f6a-7b8c-9d0e1f2a3b4c',
    title: 'Luxury Villa with a stunning Ural view',
    description: 'Experience the luxury in this exclusive villa. With a private pool and panoramic windows, it offers an unforgettable view of the Ural mountains.',
    isPremium: true,
    type: 'House',
    rating: 5.0,
    price: 350,
    images: [
      'https://placehold.co/260x200/EF4444/FFFFFF?text=Exclusive_Villa_1',
      'https://placehold.co/260x200/EF4444/FFFFFF?text=Exclusive_Villa_2',
      'https://placehold.co/260x200/EF4444/FFFFFF?text=Exclusive_Villa_3',
    ],
    goods: ['Wi-Fi', 'Air conditioning', 'Private pool', 'Kitchen', 'Dishwasher'],
    bedrooms: 5,
    maxAdults: 10,
    host: HOSTS['angelina'],
    city: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },
  },
  {
    id: 'c2f4d6e8-1a0b-3c5d-7e9f-8h0i1j2k3l4m',
    title: 'Cozy and quiet studio near the park',
    description: 'This charming studio is perfect for a peaceful getaway. Located next to a large green park, it is ideal for walks and relaxation.',
    isPremium: false,
    type: 'Studio',
    rating: 4.5,
    price: 150,
    images: [
      'https://placehold.co/260x200/34D399/FFFFFF?text=Cozy_Cottage_1',
      'https://placehold.co/260x200/34D399/FFFFFF?text=Cozy_Cottage_2',
    ],
    goods: ['Wi-Fi', 'Heating', 'Kitchenette'],
    bedrooms: 1,
    maxAdults: 2,
    host: HOSTS['max'],
    city: 'Amsterdam',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },
  },
];
