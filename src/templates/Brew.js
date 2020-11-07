import React from 'react';
import {graphql} from 'gatsby';

const Brew = ({data: {gcms: {brew}}}) => {

    return(
        <>
        <h1>{brew.title}</h1>
        <p>{brew.whatsBrewing}</p>
        </>
    )
}

export const PageQuery = graphql`
    query BrewQuery($id: ID!) {
        gcms {
            brew(where: {id: $id}) {
                title
                whatsBrewing
            }
        }
    }
`

export default Brew;