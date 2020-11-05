import { graphql, useStaticQuery } from "gatsby";

const useSiteSettings = () => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        siteSettings {
          id
          profileImage {
            id
            url
            width
            height
          }
          subheading
          siteTitle
        }
      }
    }
  `);

  return data.gcms.siteSettings[0];
};

export default useSiteSettings;
