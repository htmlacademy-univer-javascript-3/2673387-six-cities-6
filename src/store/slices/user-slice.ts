import { createSlice } from '@reduxjs/toolkit';
import { SliceType, AuthStatus } from '../../const';
import { UserData } from '../../types/auth-data';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

type UserState = {
  authorizationStatus: AuthStatus;
  user: UserData | null;
};

const initialState: UserState = {
  authorizationStatus: AuthStatus.NotAuthorised,
  user: null,
};

export const userSlice = createSlice({
  name: SliceType.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Authorised;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NotAuthorised;
        state.user = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Authorised;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NotAuthorised;
        state.user = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NotAuthorised;
        state.user = null;
      });
  }
});
