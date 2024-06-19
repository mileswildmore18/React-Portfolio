import React from 'react';
// Adds the information of the Resume and providing a link to the resume online.
const ResumeComponent = () => {
    return (
        <header>
            <h1>Resume</h1>
            <p>Download my <a href='https://docs.google.com/document/d/1cIG2_CdIwOsZ4J_XUdEZ7eNnOZRmyKokOTf7pcq4DzA/edit'>resume</a></p>
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