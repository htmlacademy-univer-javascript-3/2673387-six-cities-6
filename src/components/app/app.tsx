import MainPage from '../../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {useSelector} from 'react-redux';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import { State } from '../../store';

function App(): JSX.Element {
  const city = useSelector((state: State) => state.city);
  const offers = useSelector((state: State) => state.offers);
  const cityOffers = offers.filter((offer) => offer.city.name === city);
  const authStatus = useAppSelector((state: State) => state.authorizationStatus);

  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={cityOffers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={authStatus}>
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
          element={<OfferPage offers={offers}/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

