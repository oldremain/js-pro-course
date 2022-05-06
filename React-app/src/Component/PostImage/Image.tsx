import React, { useState } from "react";
import PostType from "../../types/PostType";
import notFoundImage from "../../assets/img/notfound.png";

import s from "./Image.module.scss";

type PropsType = {
    data: PostType;
};

const Image: React.FC<PropsType> = ({ data }) => {
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true);
    };
    return (
        <div className={s.PostImageWrap}>
            {!!data.image && !error ? (
                <img
                    src={data.image}
                    onError={handleError}
                    alt="card"
                    className={s.PostImage}
                />
            ) : (
                <img
                    src={notFoundImage}
                    alt="notfound"
                    className={s.PostImage}
                />
            )}
        </div>
    );
};

export default Image;
