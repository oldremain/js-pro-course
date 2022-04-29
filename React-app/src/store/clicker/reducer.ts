import { createReducer } from "@reduxjs/toolkit";
import { setValue, shiftValue } from "./actionCreators";
import { ClickerStateType } from "./types";

const initialState: ClickerStateType = {
    value: 0,
};

export const clickerReducer = createReducer(initialState, {
    [setValue.type]: (state, action) => {
        state.value = action.payload;
    },
    [shiftValue.type]: (state, action) => {
        state.value = state.value + action.payload;
    },
});

console.log(clickerReducer.getInitialState());
