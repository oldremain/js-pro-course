import React, { useState } from "react";
import PostType from "../../types/PostType";
import notFoundImage from "../../assets/img/notfound.png";

import "./Image.scss";

type PropsType = {
    data: PostType;
};

const Image: React.FC<PropsType> = ({ data }) => {
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true);
    };
    return (
        <div className="Image">
            {!!data.image && !error ? (
                <img src={data.image} onError={handleError} alt="card" />
            ) : (
                <img src={notFoundImage} alt="notfound" />
            )}
        </div>
    );
};

export default Image;
