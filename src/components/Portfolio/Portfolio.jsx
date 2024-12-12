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
        title: 'Apple iPhone Animation',
        description: 'Witness amazing features of the iPhone',
        imageUrl: 'https://github.com/mileswildmore18/Apple/blob/main/public/assets/images/website-picture.png',
        projectUrl: 'https://animationmiles.netlify.app',
        repoUrl: 'https://github.com/mileswildmore18/Apple'
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