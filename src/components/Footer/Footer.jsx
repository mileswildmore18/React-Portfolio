import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>Copyright ©{new Date().getFullYear()} Miles Wildmore. <br /> All rights reserved.</p>

            <ul>
                <li><a href="https://github.com/mileswildmore18" target="_blank" rel="noopener norefferer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/miles-wildmore-622b2b16/" target="_blank" rel="noopener norefferer">LinkedIn</a></li>
                <li><a href="https://instagram.com/mileswildmore">Instagram</a></li>
            </ul>

        </footer>
    );
};

export default Footer;