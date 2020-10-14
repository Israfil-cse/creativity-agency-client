import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </header>
    );
};

export default Header;