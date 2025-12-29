import MainPage from '../../pages/main-page/main-page.tsx';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, SliceType} from '../../const.ts';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import { State } from '../../store';

function App(): JSX.Element {
  const authStatus = useAppSelector((state: State) => state[SliceType.User].authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state[SliceType.Offers].isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authStatus={authStatus}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route
        path={`${AppRoute.Offer}/:offerId`}
        element={<OfferPage />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;

