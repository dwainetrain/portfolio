import React from 'react'

const Portrait = ({ settings: { profileImage} }) => {

    return(
        <p className="portrait">
          <img
            src={profileImage.url}
            alt="Portrait of Dwaine Best"
          />
        </p>
    )
}

export default Portrait;