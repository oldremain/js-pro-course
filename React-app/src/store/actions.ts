import * as clickerActions from "./clicker/actionCreators";
import * as postActions from "./post/actionCreators";
import * as postLikesActions from "./postLikes/actionCreator";
import * as postMarkAction from "./postBookmark/actionCreator";

const actions = {
    ...clickerActions,
    ...postActions,
    ...postLikesActions,
    ...postMarkAction,
};

export default actions;
