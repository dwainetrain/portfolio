import React from "react";

// The Projects section on the homepage

import { Link } from "gatsby";

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <>
      <h1>Projects</h1>
      {projects.map((project) => (
        <Link key={project.id} to={`/projects/${project.slug}`}>
          {project.title}
        </Link>
      ))}
      <Link to={`/projects/`}>Explore More in the Projects Archive</Link>
    </>
  );
};

export default Projects;
