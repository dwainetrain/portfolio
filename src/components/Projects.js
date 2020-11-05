import React from "react";

import { Link } from "gatsby";

const Projects = ({projects}) => {
  return (
    <>
    <h1>Projects</h1>
      {projects.map((project) => (
        <Link key={project.id} to={`/projects/`}>
          {project.title}
        </Link>
      ))}
    </>
  );
};

export default Projects;
