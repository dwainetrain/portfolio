import { graphql, useStaticQuery } from "gatsby";

const useProjects = () => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        projects {
          id
          title
          slug
          tags {
            id
            name
          }
        }
      }
    }
  `);

  return data.gcms.projects;
};

export default useProjects;
