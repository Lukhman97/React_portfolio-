import React from "react";

function ProjectCard({ image, title, description, links }) {
  return (
    <article className="portfolio-card">
      
      <div className="card-media">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="card-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

    </article>
  );
}

export default ProjectCard;
