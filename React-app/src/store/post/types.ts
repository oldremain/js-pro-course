import ErrorType from "../../types/PostErrorType";
import PostType from "../../types/PostType";

export type PostStateType = {
    data?: PostType;
    loading: boolean;
    error: ErrorType;
};

export enum PostActionTypes {
    SET_DATA = "SET_DATA",
    SET_LOADING = "SET_LOADING",
    SET_ERROR = "SET_ERROR",
}

type SetDataAction = {
    type: PostActionTypes.SET_DATA;
    payload?: PostType;
};

type SetLoadingAction = {
    type: PostActionTypes.SET_LOADING;
    payload: boolean;
};

type SetErrorAction = {
    type: PostActionTypes.SET_ERROR;
    payload: ErrorType;
};

export type PostActionType = SetDataAction | SetLoadingAction | SetErrorAction;
