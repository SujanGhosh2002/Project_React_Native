import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Image } from "react-native-reanimated/lib/typescript/Animated";
import { boolean } from "yup";


export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: [] as string[],
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            return state.filter(image => image !== action.payload);
        },

    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
