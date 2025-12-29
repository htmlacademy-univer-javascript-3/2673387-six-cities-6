import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SliceType } from '../../const';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {fetchFavoritesAction} from '../../store/api-action.ts';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page.tsx';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state[SliceType.Offers].favoriteOffers);
  const isLoading = useAppSelector((state) => state[SliceType.Offers].isFavoritesLoading);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const hasFavorites = offers.length > 0;

  const favoriteOffersByCity = offers.reduce<Record<string, typeof offers>>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  return (
    <div className={`page ${!hasFavorites ? 'page--favorites-empty' : ''}`}>
      <Header />

      <main className={`page__main page__main--favorites ${!hasFavorites ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {hasFavorites ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(favoriteOffersByCity).map(([city, cityOffers]) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="/">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <OfferList cardType="favorites" offers={cityOffers} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : (<FavoritesEmptyPage />
          )}
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
