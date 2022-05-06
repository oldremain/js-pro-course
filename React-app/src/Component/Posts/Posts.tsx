import React, { useState } from "react";
import PostsServer from "./PostsServer";
import PostsFront from "./PostsFront";
import Button from "../HeaderBody/Button/Button";

import "./Posts.scss";

type PropsType = {};

const Posts: React.FC<PropsType> = () => {
    const [isServerMode, setIsServerMode] = useState(true);

    const handleToggleMode = () => {
        setIsServerMode((isServerMode) => !isServerMode);
    };

    return (
        <section className="Posts">
            <Button className="Posts-btn-filter" onClick={handleToggleMode}>
                Toggle Mode
            </Button>
            {isServerMode ? <PostsServer /> : <PostsFront />}
        </section>
    );
};

export default Posts;
