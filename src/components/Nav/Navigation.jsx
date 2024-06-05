import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    let location = useLocation();
    return (
        <nav>
            <ul>
                <li className={location.pathname === "/" ? "active" : ""}><Link to="/">About Me</Link></li>
                <li className={location.pathname === "/Portfolio" ? "active" : ""}><Link to="/Portfolio">Portfolio</Link></li>
                <li className={location.pathname === "/Contact" ? "active" : ""}><Link to="/Contact">Contact</Link></li>
                <li className={location.pathname === "/Resume" ? "active" : ""}><Link to="/Resume">Resume</Link></li>
            </ul>
        </nav>

    );
};

export default Navigation;