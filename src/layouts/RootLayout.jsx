import React from 'react';
import { Outlet } from 'react-router';
import NavBer from '../pages/Shared/NavBer';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
