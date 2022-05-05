import React from "react";
import { Link } from "react-router-dom";
import Image from "../../PostImage/Image";
import PostType from "../../../types/PostType";
import useSelector from "../../hooks/useSelector";
import useActions from "../../hooks/useActions";

import "./PostsCard.scss";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import BookmarkIcon from "@mui/icons-material/Bookmark";

type PropsType = {
    data: PostType;
};

const PostsCard: React.FC<PropsType> = ({ data }) => {
    const { id } = data;

    const { likes, dislikes } = useSelector((state) => state.postLikes); // likes[], dislikes[]
    const { markedPosts } = useSelector((state) => state.postMarks);

    const { setLike, setDislike, setPostMarked } = useActions();

    const isLiked = likes.includes(id);
    const isDisliked = dislikes.includes(id);
    const isMarked = markedPosts.includes(id);

    const likeHandler = () => setLike(id);
    const dislikeHandler = () => setDislike(id);
    const markHandler = () => setPostMarked(id);

    return (
        <>
            <div className="Card-wrap">
                <Link to={`/posts/${data.id}`}>
                    <Image data={data} />
                </Link>
                <div className="Title">{data.title}</div>
                <div className="Text">{data.text}</div>
                <div className="Date">{data.date}</div>
                <Stack direction="row" className="Card-like-controls">
                    <IconButton aria-label="like" onClick={likeHandler}>
                        <ThumbUpIcon
                            fontSize="small"
                            sx={{ fontSize: 17, color: isLiked ? "green" : "" }}
                        />
                    </IconButton>
                    <IconButton aria-label="dislike" onClick={dislikeHandler}>
                        <ThumbDownIcon
                            fontSize="small"
                            sx={{
                                fontSize: 17,
                                color: isDisliked ? "red" : "",
                            }}
                        />
                    </IconButton>
                    <IconButton aria-label="dislike" onClick={markHandler}>
                        <BookmarkIcon
                            fontSize="small"
                            sx={{
                                fontSize: 17,
                                color: isMarked ? "yellow" : "",
                            }}
                        />
                    </IconButton>
                </Stack>
            </div>
        </>
    );
};

export default PostsCard;
