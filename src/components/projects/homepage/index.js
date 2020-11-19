import React from "react";

// The Projects section on the homepage

import { Link } from "gatsby";

const Projects = ({ projects }) => {
  return (
    <div>
      <h2 className="section-header">Projects</h2>
      <div className="listings">
        {projects.map((project) => (
          <div key={project.id} className="listing">
            <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
            <div className="tags">
              {project.tags.map((tag, index) => {
                return index + 1 !== project.tags.length
                  ? `${tag.name}, `
                  : `${tag.name}.`;
              })}
            </div>
          </div>
        ))}
      </div>
      {/* <Link to={`/projects/`}>Explore More in the Projects Archive</Link> */}
    </div>
  );
};

export default Projects;
