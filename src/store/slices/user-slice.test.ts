import { userSlice } from './user-slice';
import { AuthStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

describe('userSlice Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthStatus.Unknown,
      user: null,
    };

    const result = userSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" status when checkAuthAction is fulfilled', () => {
    const initialState = {
      authorizationStatus: AuthStatus.Unknown,
      user: null,
    };
    const mockUser = { email: 'test@test.ru', token: 'token', name: 'Test', avatarUrl: '', isPro: false, id: 1 };

    const result = userSlice.reducer(initialState, {
      type: checkAuthAction.fulfilled.type,
      payload: mockUser,
    });

    expect(result.authorizationStatus).toBe(AuthStatus.Authorised);
    expect(result.user).toEqual(mockUser);
  });

  it('should set "NoAuth" status when checkAuthAction is rejected', () => {
    const initialState = {
      authorizationStatus: AuthStatus.Unknown,
      user: null,
    };

    const result = userSlice.reducer(initialState, {
      type: checkAuthAction.rejected.type,
    });

    expect(result.authorizationStatus).toBe(AuthStatus.NotAuthorised);
    expect(result.user).toBe(null);
  });

  it('should set "Auth" status when loginAction is fulfilled', () => {
    const initialState = {
      authorizationStatus: AuthStatus.NotAuthorised,
      user: null,
    };
    const mockUser = { email: 'test@test.ru', token: 'token', name: 'Test', avatarUrl: '', isPro: false, id: 1 };

    const result = userSlice.reducer(initialState, {
      type: loginAction.fulfilled.type,
      payload: mockUser,
    });

    expect(result.authorizationStatus).toBe(AuthStatus.Authorised);
    expect(result.user).toEqual(mockUser);
  });

  it('should set "NoAuth" status when loginAction is rejected', () => {
    const initialState = {
      authorizationStatus: AuthStatus.Unknown,
      user: null,
    };

    const result = userSlice.reducer(initialState, {
      type: loginAction.rejected.type,
    });

    expect(result.authorizationStatus).toBe(AuthStatus.NotAuthorised);
  });

  it('should set "NoAuth" status when logoutAction is fulfilled', () => {
    const initialState = {
      authorizationStatus: AuthStatus.Authorised,
      user: { email: 'test@test.ru', token: 'token', name: 'Test', avatarUrl: '', isPro: false, id: 1 },
    };

    const result = userSlice.reducer(initialState, {
      type: logoutAction.fulfilled.type,
    });

    expect(result.authorizationStatus).toBe(AuthStatus.NotAuthorised);
    expect(result.user).toBe(null);
  });
});
