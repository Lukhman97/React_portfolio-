import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection({ title, projects }) {
  return (
    <>
      <h3 className="subcategory-title">{title}</h3>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
}

export default ProjectSection;
