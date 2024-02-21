import { createSlice } from '@reduxjs/toolkit';

const initialStateColor = "";

export const themeSlice = createSlice({
    name:"theme",
    initialState: {
        value: initialStateColor,
    },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;