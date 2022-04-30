import { createReducer } from "@reduxjs/toolkit";
import {
    ClickerActionType,
    ClickerActionTypes,
    ClickerStateType,
} from "./types";

const initialState: ClickerStateType = {
    value: 0,
};

export const clickerReducer = createReducer(initialState, {
    [ClickerActionTypes.SET_VALUE]: (state, action: ClickerActionType) => {
        state.value = action.payload;
    },
    [ClickerActionTypes.SHIFT_VALUE]: (state, action: ClickerActionType) => {
        state.value = state.value + action.payload;
    },
});

//console.log(clickerReducer.getInitialState());
// default value ??
