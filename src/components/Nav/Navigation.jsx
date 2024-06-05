import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    let location = useLocation();
    return (
        <nav>
            <ul>
                <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>About Me</Link></li>
                <li><Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "active" : ""}>Portfolio</Link></li>
                <li><Link to="/Contact" className={location.pathname === "/Contact" ? "active" : ""}>Contact</Link></li>
                <li><Link to="/Resume" className={location.pathname === "/Resume" ? "active" : ""}>Resume</Link></li>
            </ul>
        </nav>

    );
};

export default Navigation;