import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, changeSort } from '../../store/slices/app-slice';
import { CITIES_LIST, SortOptions } from '../../const';
import { getCity, getFilteredSortedOffers, getSortOption } from '../../store/selectors';

import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import OfferSort from '../../components/offer-sort/offer-sort';
import {CityType} from '../../types/offer.ts';

function MainPage(): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const sortedOffers = useAppSelector(getFilteredSortedOffers);
  const cityName = useAppSelector(getCity);
  const activeSort = useAppSelector(getSortOption);

  const currentCity = CITIES_LIST.find((city) => city.name === cityName) ?? CITIES_LIST[0];
  const locations = sortedOffers.map((offer) => offer.location);
  const activeOffer = sortedOffers.find((offer) => offer.id === activeOfferId);
  const activeLocation = activeOffer ? activeOffer.location : null;

  const handleCardHover = useCallback((offerId: string | null) => {
    setActiveOfferId(offerId);
  }, []);

  const handleCityChange = useCallback((city: CityType) => {
    dispatch(changeCity(city));
  }, [dispatch]);

  const handleSortChange = useCallback((newSort: SortOptions) => {
    dispatch(changeSort(newSort));
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${sortedOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList
              cities={CITIES_LIST}
              activeCity={cityName}
              onChange={handleCityChange}
            />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {cityName}</b>

              <OfferSort
                activeOption={activeSort}
                onSorterChange={handleSortChange}
              />

              <OfferList
                cardType={'cities'}
                offers={sortedOffers}
                onCardHover={handleCardHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                className="cities__map"
                city={currentCity}
                locations={locations}
                activeLocation={activeLocation}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
