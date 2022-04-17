import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import HeaderBody from "./Component/HeaderBody/HeaderBody";
import Posts from "./Component/Posts/Posts";
import Registration from "./Component/Registration/Registration";
import Post from "./Component/Post/Post";

import "./App.scss";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<HeaderBody />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:id" element={<Post />} />
                    <Route path="/registration" element={<Registration />} />
                </Route>

                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
