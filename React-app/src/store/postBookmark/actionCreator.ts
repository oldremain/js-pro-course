import { createAction } from "@reduxjs/toolkit";
import { PostMarkActionType } from "./types";

export const setPostMarked = createAction<number>(PostMarkActionType.SET_MARK);
