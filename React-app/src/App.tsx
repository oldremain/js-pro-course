import React, { useEffect, useState } from 'react';
import Header from './Component/Header/Header';
import Posts from './Component/Posts/Posts';
import Form from './Component/Registration/Registration';

import './App.scss';
import PostsContext from './contexts/PostsContext';
//import LanguageContext from './contexts/LanguageContext';

const App: React.FC = () => {
    const [postCount, setCount] = useState(0);
    // const [lang, setLang] = useState('eng');

    return (
        // <LanguageContext.Provider value={{ lang, setLang }}>
        <PostsContext.Provider value={{ postCount, setCount }}>
            <Header />
            <Posts />
            <section className="Form">
                <div className="container">
                    <Form />
                </div>
            </section>
        </PostsContext.Provider>
        // </LanguageContext.Provider>
    );
};

export default App;
