import React from 'react';
import {graphql} from 'gatsby';

const Project = ({data: {gcms: {project}}}) => {

    return(
        <>
        <h1>{project.title}</h1>
        <p>{project.body}</p>
        </>
    )
}

export const PageQuery = graphql`
    query ProjectQuery($id: ID!) {
        gcms {
            project(where: {id: $id}) {
                title
                body
            }
        }
    }
`

export default Project;