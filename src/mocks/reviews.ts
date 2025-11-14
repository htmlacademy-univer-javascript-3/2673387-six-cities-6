import type Review from '../types/review';

export const MOCKED_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    user: {
      name: 'Max',
      avatarUrl: 'https://i.pravatar.cc/54?u=max',
    },
    rating: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2024-04-24',
  },
  {
    id: 'rev-2',
    user: {
      name: 'Kate',
      avatarUrl: 'https://i.pravatar.cc/54?u=kate',
    },
    rating: 5,
    comment: 'The apartment was even better than expected! Very clean, spacious, and the host was incredibly welcoming. Would definitely stay here again.',
    date: '2024-05-10',
  },
];
