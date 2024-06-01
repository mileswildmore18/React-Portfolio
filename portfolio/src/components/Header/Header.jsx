import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <h1>Miles Wildmore</h1>
            <Navigation />
        </header>
    );
};

export default Header;