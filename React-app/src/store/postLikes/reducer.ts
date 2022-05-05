import { PostGrade } from "./../../enums/PostGrade";
import { createReducer } from "@reduxjs/toolkit";
import {
    PostLikesType,
    PostLikeActionTypes,
    PostLikeActionType,
} from "./types";

const getLikesFromLocalStorage = (key: string) => {
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
    }
};

const setLikesToLocalStorage = (likes: number[], dislikes: number[]) => {
    localStorage.setItem(
        "likesState",
        JSON.stringify(Object.assign({}, { likes }, { dislikes }))
    );
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

    setLikesToLocalStorage(state.likes, state.dislikes);
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

    setLikesToLocalStorage(state.likes, state.dislikes);
}

const initialState: PostLikesType = {
    likes: getLikesFromLocalStorage(PostGrade.LIKES),
    dislikes: getLikesFromLocalStorage(PostGrade.DISLIKES),
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
