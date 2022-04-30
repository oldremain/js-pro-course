import axios from "axios";
import PostErrorType from "../../types/PostErrorType";
import PostType from "../../types/PostType";
import actions from "../actions";
import { PostActionType, PostActionTypes } from "./types";

const URL = "https://studapi.teachmeskills.by/blog/posts/";

export const fetchPost = (id?: string) => async (dispatch: any) => {
    dispatch(setPostLoading(true));
    dispatch(setPost(undefined));
    dispatch(
        setPostError({
            status: false,
            name: undefined,
            message: undefined,
            isVisible: false,
        })
    );
    const url = `${URL}/${id}`;

    const response = await axios.get(url);

    try {
        dispatch(setPost(response.data as PostType));
    } catch (error: any) {
        dispatch(
            setPostError({
                status: true,
                name: error.name,
                message: error.message,
                isVisible: true,
            })
        );
    }
    dispatch(setPostLoading(false));
};

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
