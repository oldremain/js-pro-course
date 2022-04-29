import PostErrorType from "../../types/PostErrorType";
import PostType from "../../types/PostType";
import { PostActionType, PostActionTypes } from "./types";

export const setPost = (value?: PostType): PostActionType => ({
    type: PostActionTypes.SET_DATA,
    payload: value,
});

export const setPostLoading = (value: boolean): PostActionType => ({
    type: PostActionTypes.SET_LOADING,
    payload: value,
});

export const setPostError = (value: PostErrorType): PostActionType => ({
    type: PostActionTypes.SET_ERROR,
    payload: value,
});
