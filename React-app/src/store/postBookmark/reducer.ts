import { createReducer } from "@reduxjs/toolkit";
import {
    PostBookmarks,
    PostMarkActionType,
    PostMarkedActionType,
} from "./types";

function setMarkedPostsToLocalStorage(posts: number[]) {
    localStorage.setItem("markedPosts", JSON.stringify(posts));
}

function getMarkedPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("markedPosts") || "[]");
}

const initialState: PostBookmarks = {
    markedPosts: getMarkedPostsFromLocalStorage(),
};

export const postMarksReducer = createReducer(initialState, {
    [PostMarkActionType.SET_MARK]: (state, action: PostMarkedActionType) => {
        if (!state.markedPosts.includes(action.payload)) {
            state.markedPosts = [...state.markedPosts, action.payload];
        } else {
            state.markedPosts = state.markedPosts.filter(
                (post) => post !== action.payload
            );
        }

        setMarkedPostsToLocalStorage(state.markedPosts);
    },
});
