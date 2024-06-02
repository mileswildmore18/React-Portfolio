import React from 'react';


const Project = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            {imageUrl && <img src={imageUrl} alt={title} />}
            {projectUrl && <a href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
    );
};

export default Project;