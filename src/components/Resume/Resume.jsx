import React from 'react';
// Adds the information of the Resume and providing a link to the resume online.
const ResumeComponent = () => {
    return (
        <header>
            <h1>Resume</h1>
            <p>Download my <a href='https://www.linkedin.com/in/miles-wildmore-622b2b16/overlay/1535910815724/single-media-viewer/?profileId=ACoAAANe07oBMJ_clMinKwmMX2qlpDkpq5GBFmk'>resume</a></p>
            <h2>Front-end Proficiences</h2>
            <p>
                HTML <br />
            CSS <br />
            JavaScript <br />
            Responsive Design <br />
            React 
            </p>
            <h2>Back-end Proficiences</h2>
            <p>
                APIs <br />
                Node <br />
                Express <br />
                My SQL, Sequelize <br />
                MongoDB, Mongoose <br />
                REST
            </p>
        </header>
    );
};

export default ResumeComponent;