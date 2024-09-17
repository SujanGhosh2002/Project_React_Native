import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import usersSlice from './features/users/usersSlice';
import counterSlice from './features/counter/countSlice';
import togglePasswordSlice from './features/toggle/togglePasswordSlice';
import showSidebarSlice from './features/sidebar/sidebarSlice';
import favoriteSlice from './features/favorite/favoriteSlice';
import messagesSlice from './features/messages/messagesSlice';
import postsSlice from './features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    count: counterSlice,
    password: togglePasswordSlice,
    sidebar: showSidebarSlice,
    favorite: favoriteSlice,
    messages: messagesSlice,
    posts: postsSlice
=======
import favoriteSlice from './features/favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice
>>>>>>> 3d26925bf784a0775e0de4df1bbd8ba75036963a
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
