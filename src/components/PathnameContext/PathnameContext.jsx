import React, { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PathnameContext = createContext();
//properties for current location on the portfolio
export const PathnameProvider = ({ children }) => {
    const location = useLocation();
    const [pathname, setPathname] = useState(location.pathname);

    return (
        <PathnameContext.Provider value={{ pathname, setPathname }}>
            {children}
        </PathnameContext.Provider>
    );
};

export const useCurrentPath = () => useContext(PathnameContext);