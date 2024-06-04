import React from 'react';
import Project from '../Project/Project';


const projectsData = [
    {
        title: 'The Wild Wild Wellness',
        description: 'Get fit with exercises and check out healthy diets to get you into shape',
        imageUrl: 'https://github.com/mileswildmore18/The-Wild-Wild-Wellness/raw/main/Assets/Wild%20Wild%20Wellness%20screenshot.png',
        projectUrl: 'https://mileswildmore18.github.io/The-Wild-Wild-Wellness/',
        repoUrl: 'https://github.com/mileswildmore18/The-Wild-Wild-Wellness'
    },
    {
        title: 'XP Archive',
        description: 'Pick out your favourite games and gain XP as you play the game and add them to your collection',
        imageUrl: 'https://github.com/mileswildmore18/XP-Archive/raw/main/public/images/XP%20Archive%20Screenshot.png',
        projectUrl: 'https://the-wild-coders.onrender.com/',
        repoUrl: 'https://github.com/mileswildmore18/XP-Archive'
    },
    {
        title: 'Note Taker',
        description: 'Take Notes and create a list about what you want to do',
        imageUrl: 'https://github.com/mileswildmore18/Note-Taker/raw/main/Images/Note%20Taker%20screenshot.png',
        projectUrl: 'https://note-taker-mn29.onrender.com',
        repoUrl: 'https://github.com/mileswildmore18/Note-Taker'
    },
    {
        
        title: 'Weather Dashboard',
        description: 'Find out the forecast in your area or around the world',
        imageUrl: 'https://github.com/mileswildmore18/Weather-Dashboard/raw/main/Weather%20Dashboard%20screenshot.png',
        projectUrl: 'https://mileswildmore18.github.io/Weather-Dashboard/',
        repoUrl: 'https://github.com/mileswildmore18/Weather-Dashboard'
    },
    {
        title: 'Miles Personal Blog',
        description: 'Add your content onto a blog based on your thoughts',
        imageUrl: 'https://github.com/mileswildmore18/Miles-Personal-Blog/raw/main/screenshot%20of%20website.jpg',
        projectUrl: 'https://mileswildmore18.github.io/Miles-Personal-Blog/',
        repoUrl: 'https://github.com/mileswildmore18/Miles-Personal-Blog'
    },
    {
        title: 'Employee Payroll Tracker',
        description: 'Keep track of the payroll of each employee',
        imageUrl: 'https://private-user-images.githubusercontent.com/163462827/319399967-fb10ab28-92fe-4033-a626-edfc09380798.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc1NDIwODQsIm5iZiI6MTcxNzU0MTc4NCwicGF0aCI6Ii8xNjM0NjI4MjcvMzE5Mzk5OTY3LWZiMTBhYjI4LTkyZmUtNDAzMy1hNjI2LWVkZmMwOTM4MDc5OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwNFQyMjU2MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01YzE4ZDFhM2UxODNhNzg4YWQ2MWUwNzUxZTM0YmMxOTc4ZTAxNmE4NDQyMzJkOGJkY2EyOTk4NTc4YTcxZTc0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.f1rUyE6H4nm6bNHGvuu7AgCQWQU5IelCb6aym3E0tac',
        projectUrl: 'https://mileswildmore18.github.io/Employee-Payroll-Tracker/',
        repoUrl: 'https://github.com/mileswildmore18/Employee-Payroll-Tracker'
    }
];

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h1>My Projects</h1>
            {projectsData.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    projectUrl={project.projectUrl}
                    repoUrl={project.repoUrl}
                />
            ))}
        </div>
    );
};

export default Portfolio;