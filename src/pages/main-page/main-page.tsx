import OfferList from '../../components/offer-list/offer-list.tsx';
import {Offer} from '../../types/offer.ts';
import Map from '../../components/map/map.jsx';
import {CITIES_LIST} from '../../mocks/cities.ts';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {State} from '../../types/state.ts';
import CityList from '../../components/city-list/city-list.tsx';
import OfferSort from '../../components/offer-sort/offer-sort.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeSort} from '../../store/action.ts';
type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers} : MainPageProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const activeSort = useAppSelector((state: State) => state.sortOptions);
  const handleCardHover = (offerId: string | null) => {
    setActiveOfferId(offerId);
  };


  const dispatch = useAppDispatch();
  const cityName = useSelector((state: State) => state.city);
  const currentCity = CITIES_LIST.find((city) => city.name === cityName) ?? CITIES_LIST[0];
  const locations = offers.map((offer) => offer.location);

  const activeOffer = offers.find((offer) => offer.id === activeOfferId);
  const activeLocation = activeOffer ? activeOffer.location : null;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={CITIES_LIST}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {cityName}</b>
              <OfferSort activeOption={activeSort} onSorterChange={(sorter) => dispatch(changeSort(sorter))} />
              <OfferList cardType={'cities'} offers={offers} onCardHover={handleCardHover} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currentCity} locations={locations} activeLocation={activeLocation}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>);
}

export default MainPage;
