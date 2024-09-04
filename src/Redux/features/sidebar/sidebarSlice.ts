import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: 0,
    reducers: {
        showSidebar: (state) => 1,
        hideSidebar: (state) => 0
    },
});

export const { showSidebar, hideSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
