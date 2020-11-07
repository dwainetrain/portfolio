import React from 'react';
import {graphql} from 'gatsby';

const Article = ({data: {gcms: {article}}}) => {

    return(
        <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        </>
    )
}

export const PageQuery = graphql`
    query ArticleQuery($id: ID!) {
        gcms {
            article(where: {id: $id}) {
                title
                body
            }
        }
    }
`

export default Article;