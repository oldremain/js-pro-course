import cloneDeep from "lodash.clonedeep";
import { setValue, shiftValue } from "./actionCreators";
import { ClickerStateType, ClickerActionType } from "./types";

const initialState: ClickerStateType = {
    value: 0,
};

export const clickerReducer = (
    state = initialState,
    action: ClickerActionType
): ClickerStateType => {
    switch (action.type) {
        case setValue.type: {
            const clone = cloneDeep(state);
            clone.value = action.payload;

            return clone;
        }
        case shiftValue.type: {
            const clone = cloneDeep(state);
            clone.value = clone.value + action.payload;

            return clone;
        }
        default:
            return state;
    }
};
