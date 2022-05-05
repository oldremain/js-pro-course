import axios from "axios";
import PostErrorType from "../../types/PostErrorType";
import PostType from "../../types/PostType";
import actions from "../actions";
import { PostActionType, PostActionTypes } from "./types";

const URL = "https://studapi.teachmeskills.by/blog/psts/";

export const fetchPost = (id?: string) => async (dispatch: any) => {
    dispatch(actions.setPostLoading(true));
    dispatch(actions.setPost(undefined));
    dispatch(
        actions.setPostError({
            status: false,
            name: undefined,
            message: undefined,
            isVisible: false,
        })
    );
    const url = `${URL}/${id}`;

    try {
        const response = await axios.get(url);
        dispatch(actions.setPost(response.data as PostType));
    } catch (error: any) {
        console.log(error);
        dispatch(
            actions.setPostError({
                status: true,
                name: error.name,
                message: error.message,
                isVisible: true,
            })
        );
    }
    dispatch(actions.setPostLoading(false));
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
