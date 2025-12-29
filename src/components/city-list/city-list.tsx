import { memo } from 'react';
import type { City, CityType } from '../../types/offer';

type CityListProps = {
  cities: City[];
  activeCity: CityType;
  onChange: (city: CityType) => void;
};

function CityListInner({ cities, activeCity, onChange }: CityListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          key={`city-${city.name}`}
          className="locations__item"
        >
          <a
            href="#"
            className={
              `locations__item-link tabs__item${
                city.name === activeCity ? ' tabs__item--active' : ''}`
            }
            onClick={(evt) => {
              evt.preventDefault();
              onChange(city.name);
            }}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const CityList = memo(CityListInner);

export default CityList;
