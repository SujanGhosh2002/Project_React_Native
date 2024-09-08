import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './features/favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
