import { render, screen } from '@testing-library/react';
import CityList from './city-list';
import { Cities } from '../../const';
import {City} from '../../types/offer.ts';

describe('Component: CityList', () => {
  it('should render correctly and highlight the active city', () => {
    const citiesMock = [
      { name: Cities.Paris, location: {} },
      { name: Cities.Cologne, location: {} },
    ] as City[];

    const activeCity = Cities.Paris;

    render(
      <CityList
        cities={citiesMock}
        activeCity={activeCity}
        onChange={() => {}}
      />
    );

    const parisElement = screen.getByText(Cities.Paris);
    const cologneElement = screen.getByText(Cities.Cologne);

    expect(parisElement).toBeInTheDocument();
    expect(cologneElement).toBeInTheDocument();

    expect(parisElement.closest('a')).toHaveClass('tabs__item--active');

    expect(cologneElement.closest('a')).not.toHaveClass('tabs__item--active');
  });
});
