import OfferList from '../../components/offer-list/offer-list.tsx';
import {Offer} from '../../types/offer.ts';
import Map from '../../components/map/map.jsx';
import {CITIES_LIST} from '../../mocks/cities.ts';
import React, {useState} from 'react';
import CityList from '../../components/city-list/city-list.tsx';
import OfferSort from '../../components/offer-sort/offer-sort.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeSort} from '../../store/action.ts';
import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const.ts';
import { logoutAction } from '../../store/api-action.ts';
import {sortOffers} from '../../store/utils.ts';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers} : MainPageProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const activeSort = useAppSelector((state) => state.sortOptions);
  const sortedOffers = sortOffers(offers, activeSort);
  const cityName = useAppSelector((state) => state.city);
  const user = useAppSelector((state) => state.user);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const handleCardHover = (offerId: string | null) => {
    setActiveOfferId(offerId);
  };


  const currentCity = CITIES_LIST.find((city) => city.name === cityName) ?? CITIES_LIST[0];
  const locations = offers.map((offer) => offer.location);

  const activeOffer = offers.find((offer) => offer.id === activeOfferId);
  const activeLocation = activeOffer ? activeOffer.location : null;

  const handleSignOut = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthStatus.Authorised ? (
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                          <img src={user?.avatarUrl} alt="User avatar" style={{ borderRadius: '50%' }} />
                        </div>
                        <span className="header__user-name user__name">{user?.email}</span>
                        <span className="header__favorite-count">3</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#" onClick={handleSignOut}>
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={CITIES_LIST} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {cityName}</b>
              <OfferSort
                activeOption={activeSort}
                onSorterChange={(sorter) => dispatch(changeSort(sorter))}
              />
              <OfferList
                cardType={'cities'}
                offers={sortedOffers}
                onCardHover={handleCardHover}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currentCity} locations={locations} activeLocation={activeLocation} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
