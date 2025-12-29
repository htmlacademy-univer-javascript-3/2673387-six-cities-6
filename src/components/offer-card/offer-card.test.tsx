import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import OfferCard from './offer-card';
import { SliceType, AuthStatus } from '../../const';
import { Offer } from '../../types/offer';

const mockStore = configureMockStore();

describe('Component: OfferCard', () => {
  it('should render correct content', () => {
    const store = mockStore({
      [SliceType.User]: { authorizationStatus: AuthStatus.NotAuthorised },
    });

    const mockOffer = {
      id: '1',
      title: 'Luxury Apartment',
      type: 'apartment',
      price: 150,
      previewImage: 'img/test.jpg',
      isPremium: true,
      isFavorite: false,
      rating: 4.8,
    } as Offer;

    render(
      <Provider store={store}>
        <MemoryRouter>
          <OfferCard
            offer={mockOffer}
            cardType="cities"
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Luxury Apartment')).toBeInTheDocument();
    expect(screen.getByText(/150/)).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
    expect(screen.getByText('apartment')).toBeInTheDocument();

    const image = screen.getByAltText('Luxury Apartment');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'img/test.jpg');
  });
});
