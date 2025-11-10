import OfferType from '../types/offer.ts';


export const MOCKED_OFFERS: OfferType[] = [
  {
    id: 'b81d77cc-5a7a-4c2d-9477-802513a0e623',
    isPremium: true,
    imageSource: 'https://placehold.co/260x200/4F46E5/FFFFFF?text=Premium_Flat',
    priceValue: '120',
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    rating: 96,
    city: 'Amsterdam'
  },
  {
    id: 'f56c9d2f-4a3b-4c1e-8e5f-170f05a1e2f3',
    isPremium: false,
    imageSource: 'https://placehold.co/260x200/9CA3AF/FFFFFF?text=Private_Room',
    priceValue: '80',
    description: 'Private Room in the City Center',
    type: 'Private Room',
    rating: 70,
    city: 'Amsterdam'

  },
  {
    id: 'a0e3b1c5-2d4e-4f6a-7b8c-9d0e1f2a3b4c',
    isPremium: true,
    imageSource: 'https://placehold.co/260x200/EF4444/FFFFFF?text=Exclusive_Villa',
    priceValue: '350',
    description: 'Luxury Villa with a stunning ocean view',
    type: 'House',
    rating: 50,
    city: 'Ekaterinburg'
  },
  {
    id: 'c2f4d6e8-1a0b-3c5d-7e9f-8h0i1j2k3l4m',
    isPremium: false,
    imageSource: 'https://placehold.co/260x200/34D399/FFFFFF?text=Cozy_Cottage',
    priceValue: '150',
    description: 'Cozy and quiet studio near the park',
    type: 'Studio',
    rating: 50,
    city: 'Ekaterinburg'
  },
];
