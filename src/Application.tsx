import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProfilePage from './pages/Profile';


export interface IApplication { };

const Application: React.FunctionComponent<IApplication> = props => {
    return (
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<HomePage />} /> 
           <Route path='about' element={<AboutPage />} /> 
           <Route path='profile' element={<ProfilePage />} /> 
        </Routes>
    </BrowserRouter>
    );
};

export default Application;