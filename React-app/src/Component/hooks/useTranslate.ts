import React, { useState, useEffect } from 'react';
import eng from '../../translations/eng.json';
import ru from '../../translations/ru.json';

type TranslateType = {
    [prop: string]: string;
};

type TranslatesType = {
    [prop: string]: TranslateType;
};

const translates: TranslatesType = { ru, eng };
//console.log(translates);

let lang: string = localStorage.getItem('lang') || 'eng';

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
    }, []);

    const setLang = (_lang: string) => {
        lang = _lang;
        localStorage.setItem('lang', lang);
        callbacks.forEach((callback) => callback(lang));
    };

    const t = (id: string) => {
        const translate = translates[langState];
        return translate[id] ?? id;
    };

    return {
        lang: langState,
        setLang,
        t,
    };
};

export default useTranslate;
