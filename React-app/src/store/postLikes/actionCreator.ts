import { createAction } from "@reduxjs/toolkit";
import { PostLikeActionTypes } from "./types";

export const setLike = createAction<number>(PostLikeActionTypes.SET_LIKE);
export const setDislike = createAction<number>(PostLikeActionTypes.SET_DISLIKE);
