import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}
const initialState: User = {
  name: '',
  email: '',
  phone: '',
  address: '',
  password: '',
};
export const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return { ...state, ...action.payload }
    }
  },
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
