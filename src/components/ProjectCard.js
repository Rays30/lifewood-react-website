import React from 'react';

function ProjectCard({ project, onClick }) {
    return (
        <article className="project-card" data-aos="zoom-in" data-aos-delay={project.delay} onClick={() => onClick(project)}>
            <img src={project.image} alt={project.title} className="project-thumbnail" loading="lazy" />
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-tag">{project.tag}</span>
            </div>
        </article>
    );
}

export default ProjectCard;