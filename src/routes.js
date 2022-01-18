import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Auth/Login" element={<Login/>} />
                <Route path="/Auth/SignUp" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    );
}