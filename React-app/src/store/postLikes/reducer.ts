import { PostGrade } from "./../../enums/PostGrade";
import { createReducer } from "@reduxjs/toolkit";
import {
    PostLikesType,
    PostLikeActionTypes,
    PostLikeActionType,
} from "./types";

const getGradesFromLocalStorage = (key: string) => {
    try {
        switch (key) {
            case PostGrade.LIKES: {
                const { likes } = JSON.parse(
                    localStorage.getItem("likesState") || '{"likes": []}'
                );
                return likes;
            }
            case PostGrade.DISLIKES: {
                const { dislikes } = JSON.parse(
                    localStorage.getItem("likesState") || '{"dislikes": []}'
                );
                return dislikes;
            }
            default:
                return [];
        }
    } catch {}
};

const setGradesToLocalStorage = (likes: number[], dislikes: number[]) => {
    try {
        localStorage.setItem(
            "likesState",
            JSON.stringify(Object.assign({}, { likes }, { dislikes }))
        );
    } catch {}
};

function handleLike(state: PostLikesType, action: PostLikeActionType) {
    if (state.likes.includes(action.payload)) {
        state.likes = state.likes.filter((like) => like !== action.payload);
    } else {
        state.likes = [...state.likes, action.payload];
        state.dislikes = state.dislikes.filter(
            (dislike) => dislike !== action.payload
        );
    }

    setGradesToLocalStorage(state.likes, state.dislikes);
}

function handleDislike(state: PostLikesType, action: PostLikeActionType) {
    if (state.dislikes.includes(action.payload)) {
        state.dislikes = state.dislikes.filter(
            (dislike) => dislike !== action.payload
        );
    } else {
        state.dislikes = [...state.dislikes, action.payload];
        state.likes = state.likes.filter((like) => like !== action.payload);
    }

    setGradesToLocalStorage(state.likes, state.dislikes);
}

const initialState: PostLikesType = {
    likes: getGradesFromLocalStorage(PostGrade.LIKES),
    dislikes: getGradesFromLocalStorage(PostGrade.DISLIKES),
};

export const postLikesReducer = createReducer(initialState, {
    [PostLikeActionTypes.SET_LIKE]: (state, action: PostLikeActionType) => {
        handleLike(state, action);
    },
    [PostLikeActionTypes.SET_DISLIKE]: (state, action: PostLikeActionType) => {
        handleDislike(state, action);
    },
});

//console.log(clickerReducer.getInitialState());
// default value ??
