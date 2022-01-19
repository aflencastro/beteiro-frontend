import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import AdminUsers from './pages/Admin/Users';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                
                <Route path="/Auth/Login" element={<Login/>} />
                <Route path="/Auth/SignUp" element={<SignUp/>} />

                <Route path="/Dashboard" element={<Dashboard/>} />
                
                <Route path="/Admin" element={<Admin/>} />
                <Route path="/Admin/Users" element={<AdminUsers/>} />
            </Routes>
        </BrowserRouter>
    );
}