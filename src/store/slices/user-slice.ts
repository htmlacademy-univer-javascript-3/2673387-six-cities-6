import { createSlice } from '@reduxjs/toolkit';
import { SliceType, AuthStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { UserState } from '../../types/state';

const initialState: UserState = {
  authorizationStatus: AuthStatus.Unknown,
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
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NotAuthorised;
        state.user = null;
      });
  }
});
