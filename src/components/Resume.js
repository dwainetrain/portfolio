import React from 'react'

const Resume = ({pageInfo: { slug, title, body }}) => {
    return(
        <div id="resume">
        <h1>{title}</h1>
        <p>{body}</p>
        </div>
    )
}

export default Resume;