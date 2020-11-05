import React from 'react'

const Resume = ({pageInfo: { slug, title, body }}) => {
    return(
        <>
        <h1>{title}</h1>
        <p>{body}</p>
        </>
    )
}

export default Resume;