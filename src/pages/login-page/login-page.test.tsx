import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import LoginPage from './login-page';
import { SliceType, AuthStatus } from '../../const';

const mockStore = configureMockStore();

describe('Page: LoginPage', () => {
  it('should render login form elements', () => {
    const store = mockStore({
      [SliceType.User]: { authorizationStatus: AuthStatus.NotAuthorised },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('heading', { name: /Sign in/i })).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
  });
});
