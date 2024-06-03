import React from 'react';
import Project from '../Project/Project';


const projectsData = [
    {
        title: 'The Wild Wild Wellness',
        description: 'Get fit with exercises and check out healthy diets to get you into shape',
        imageUrl: 'https://github.com/mileswildmore18/The-Wild-Wild-Wellness/raw/main/Assets/Wild%20Wild%20Wellness%20screenshot.png',
        projectUrl: 'https://mileswildmore18.github.io/The-Wild-Wild-Wellness/'
    },
    {
        title: 'XP Archive',
        description: 'Pick out your favourite games and gain XP as you play the game and add them to your collection',
        imageUrl: 'https://github.com/mileswildmore18/XP-Archive/raw/main/public/images/XP%20Archive%20Screenshot.png',
        projectUrl: 'https://the-wild-coders.onrender.com/'
    },
    {
        title: 'Project 3 coming soon!',
        description: 'Coming soon!',
        imageUrl: 'https://static01.nyt.com/images/2022/04/04/multimedia/15ai-nocode/15ai-nocode-videoSixteenByNineJumbo1600.jpg',
        projectUrl: 'Coming Soon!'
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
                />
            ))}
        </div>
    );
};

export default Portfolio;