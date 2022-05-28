import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from '../../Components/topbar/Topbar';
import Sidebar from "../../Components/sidebar/Sidebar";
import Home from '../Home/Home';

const Main = () => {
    return (
        <div>
            {/* <BrowserRouter> */}
                <Topbar/>
                <div className='container'>
                    <Sidebar/>
                    <Home/>
                </div>
            {/* </BrowserRouter> */}
        </div>
    );
};

export default Main;