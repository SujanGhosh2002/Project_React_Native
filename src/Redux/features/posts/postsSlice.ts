import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: false,
    reducers: {
        showPosts: (state) => true,
        hidePosts: (state) => false
    },
});

export const { showPosts, hidePosts } = postsSlice.actions;
export default postsSlice.reducer;
