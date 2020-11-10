import React from "react";
import { graphql } from "gatsby";

const Page = ({
  data: {
    gcms: { page },
  },
}) => {
  return (
    <>
      <h1>{page.title}</h1>
      <p>{page.body}</p>
    </>
  );
};

export const pageQuery = graphql`
  query PageQuery($id: ID!) {
    gcms {
      page(where: { id: $id }) {
        title
        body
      }
    }
  }
`;

export default Page;
