import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import HeaderBody from "./Component/HeaderBody/HeaderBody";
import Posts from "./Component/Posts/Posts";
import Registration from "./Component/Registration/Registration";
import Login from "./Component/Login/Login";
import PostById from "./Component/PostById/PostById";

import "./App.scss";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<HeaderBody />} />
                    <Route path="/posts">
                        <Route index element={<Posts />} />
                        <Route path=":id" element={<PostById />} />
                    </Route>
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
