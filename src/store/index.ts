import {reducer} from './reducer.ts';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../api/api.ts';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
