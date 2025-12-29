import { appSlice, changeCity, changeSort } from './app-slice';
import { Cities, SortOptions } from '../../const';

describe('App slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: Cities.Paris,
      sortOptions: SortOptions.Popular,
    };

    const result = appSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const result = appSlice.reducer(undefined, emptyAction);

    expect(result).toEqual({
      city: Cities.Paris,
      sortOptions: SortOptions.Popular,
    });
  });

  it('should change city with "changeCity" action', () => {
    const initialState = {
      city: Cities.Paris,
      sortOptions: SortOptions.Popular,
    };

    const result = appSlice.reducer(initialState, changeCity(Cities.Amsterdam));

    expect(result.city).toBe(Cities.Amsterdam);
  });

  it('should change sort option with "changeSort" action', () => {
    const initialState = {
      city: Cities.Paris,
      sortOptions: SortOptions.Popular,
    };

    const result = appSlice.reducer(initialState, changeSort(SortOptions.PriceLowToHigh));

    expect(result.sortOptions).toBe(SortOptions.PriceLowToHigh);
  });
});
