import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
    name: "messages",
    initialState: false,
    reducers: {
        showMessages: (state) => true,
        hideMessages: (state) => false
    },
});

export const { showMessages, hideMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
