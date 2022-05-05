import * as clickerActions from "./clicker/actionCreators";
import * as postActions from "./post/actionCreators";
import * as postLikesActions from "./postLikes/actionCreator";

const actions = {
    ...clickerActions,
    ...postActions,
    ...postLikesActions,
};

export default actions;
