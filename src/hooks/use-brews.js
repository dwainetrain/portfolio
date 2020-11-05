import { graphql, useStaticQuery } from "gatsby";

const useBrews = () => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        brews {
          id
          title
          slug
          brewStage
          updatedAt
          whatsBrewing
        }
      }
    }
  `);

  return data.gcms.brews;
};

export default useBrews;
