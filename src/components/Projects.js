import React from "react";

// The Projects section on the homepage

import { Link } from "gatsby";

const Projects = ({ projects }) => {
  return (
    <div id="projects">
      <h2 className="section-header">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link  to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/projects/`}>Explore More in the Projects Archive</Link>
    </div>
  );
};

export default Projects;
