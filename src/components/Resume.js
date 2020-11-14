import React from 'react'

const Resume = ({pageInfo: { slug, title, body }}) => {
    return(
        <div id="resume">
        <h1 className="section-header">{title}</h1>
        <p><a href="/">{body}</a></p>
        </div>
    )
}

export default Resume;