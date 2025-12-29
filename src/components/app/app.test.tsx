import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import App from './app';
import { AppRoute, AuthStatus, Cities, SortOptions, SliceType } from '../../const';

vi.mock('../../pages/main-page/main-page', () => ({
  default: () => <h1>Main Page Component</h1>
}));
vi.mock('../../pages/login-page/login-page', () => ({
  default: () => <h1>Login Page Component</h1>
}));
vi.mock('../../pages/favorites-page/favorites-page', () => ({
  default: () => <h1>Favorites Page Component</h1>
}));
vi.mock('../../pages/not-found-page/not-found-page', () => ({
  default: () => <h1>404 Page Component</h1>
}));

const mockStore = configureMockStore();

const store = mockStore({
  [SliceType.User]: {
    authorizationStatus: AuthStatus.Authorised,
    user: { email: 'test@test.ru' },
  },
  [SliceType.App]: {
    city: Cities.Paris,
    sortOptions: SortOptions.Popular,
  },
  [SliceType.Offers]: {
    offers: [],
    isOffersDataLoading: false,
    favoriteOffers: [],
    isFavoritesLoading: false,
  }
});

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Main]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Main Page Component/i)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    const noAuthStore = mockStore({
      [SliceType.User]: { authorizationStatus: AuthStatus.NotAuthorised },
      [SliceType.App]: { city: Cities.Paris },
      [SliceType.Offers]: { offers: [] }
    });

    render(
      <Provider store={noAuthStore}>
        <MemoryRouter initialEntries={[AppRoute.Login]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Login Page Component/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/non-existent-route']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/404 Page Component/i)).toBeInTheDocument();
  });

  it('should redirect to Login if user navigate to "/favorites" without auth', () => {
    const noAuthStore = mockStore({
      [SliceType.User]: { authorizationStatus: AuthStatus.NotAuthorised },
      [SliceType.App]: { city: Cities.Paris },
      [SliceType.Offers]: { offers: [] }
    });

    render(
      <Provider store={noAuthStore}>
        <MemoryRouter initialEntries={[AppRoute.Favorites]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Login Page Component/i)).toBeInTheDocument();
  });
});
