import { createSlice } from "@reduxjs/toolkit";

interface PasswordState {
    isPasswordVisible: boolean;
}

const initialState: PasswordState = {
    isPasswordVisible: true,
};

export const togglePasswordSlice = createSlice({
    name: "password",
    initialState,
    reducers: {
        showPassword: (state) => {
            state.isPasswordVisible = !state.isPasswordVisible;
        }
    },
});

export const { showPassword } = togglePasswordSlice.actions;
export default togglePasswordSlice.reducer;
