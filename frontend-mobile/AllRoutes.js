import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'
import { Home } from './views/Home';
import { About } from './views/About';
import { Login } from './views/Login';
import { Signup } from './views/Signup';

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route element={<ProtectedRoutes />}>
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Routes>            
        </>
    )
}
