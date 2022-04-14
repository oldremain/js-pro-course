import React from "react";
import useTranslate from "../../hooks/useTranslate";

import "./Language.scss";

const Language: React.FC = () => {
    const { lang, setLang: _setLang } = useTranslate();
    console.log(lang);

    return (
        <>
            <div className="Language-wrap">
                <button
                    className={`Language__btn btn_eng ${
                        lang === "eng" ? "active" : ""
                    }`}
                    onClick={() => _setLang("eng")}
                >
                    Eng
                </button>
                <div className="Language-separator"></div>
                <button
                    className={`Language__btn btn_ru ${
                        lang === "ru" ? "active" : ""
                    }`}
                    onClick={() => _setLang("ru")}
                >
                    Ru
                </button>
            </div>
        </>
    );
};

export default Language;
