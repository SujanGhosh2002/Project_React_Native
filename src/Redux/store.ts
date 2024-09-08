import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './features/users/usersSlice';
import counterSlice from './features/counter/countSlice';
import togglePasswordSlice from './features/toggle/togglePasswordSlice';
import showSidebarSlice from './features/sidebar/sidebarSlice';
import favoriteSlice from './features/favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    count: counterSlice,
    password: togglePasswordSlice,
    sidebar: showSidebarSlice,
    favorite: favoriteSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
