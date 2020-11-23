import React from 'react'

const Portrait = ({ settings: { profileImage} }) => {

    return(
        <p className="portrait">
          <img
            src={profileImage.url}
            alt="Portrait of Dwaine Best"
            width={profileImage.width}
            height={profileImage.height}
          />
        </p>
    )
}

export default Portrait;