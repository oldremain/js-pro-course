import { combineReducers } from "redux";
import { clickerReducer } from "./clicker/reducer";
import { postReducer } from "./post/reducer";
import { postLikesReducer } from "./postLikes/reducer";

export default combineReducers({
    clicker: clickerReducer,
    post: postReducer,
    postLikes: postLikesReducer,
});
