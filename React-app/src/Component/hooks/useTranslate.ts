import React, { useState, useEffect } from 'react';

let lang: string = 'eng';

//массив callback - нужно вызвать каждый при изменении lang
let callbacks: Array<(lang: string) => void> = [];

const useTranslate = () => {
    const [langState, setLangState] = useState<string>(lang);

    useEffect(() => {
        callbacks.push(setLangState);
        //console.log(callbacks);

        return () => {
            callbacks = callbacks.filter((f) => f !== setLangState);
        };
    });

    const setLang = (_lang: string) => {
        lang = _lang;

        callbacks.forEach((callback) => callback(lang));
    };

    return {
        lang: langState,
        setLang,
    };
};

export default useTranslate;
