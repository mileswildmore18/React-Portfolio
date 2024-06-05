import React from 'react';
import { useCurrentPath } from './PathnameContext';
//Properties for when the current page is active
const TitleComponent = ({ title, path }) => {
    const { pathname } = useCurrentPath();

    const isActive = pathname === path ? 'highlighted' : '';

    return (
        <h2 className={`title ${isActive}`}>{title}</h2>
    );
};

export default TitleComponent;