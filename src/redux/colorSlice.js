import { createSlice } from "@reduxjs/toolkit";

//part1: define slice (including reducers and actions)
const lightMode = true;
const initialState = { lightMode };
const colorSlice = createSlice( {
    name: 'color',
    initialState,
    reducers: {
        setColorMode: (state, action) => {
            state.lightMode = action.payload;
        }
    },
});

//export state to global (variable)
export const selectLightMode = (state) => state.color.lightMode;

//export action to global (function)
export const { setColorMode } = colorSlice.actions;

//export reducer to global 
export default colorSlice.reducer;