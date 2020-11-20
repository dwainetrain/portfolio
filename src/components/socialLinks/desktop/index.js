import React from 'react';

import GithubSVG from 'components/socialLinks/svgs/GithubSVG'
import LinkedinSVG from 'components/socialLinks/svgs/LinkedinSVG'
import EmailSVG from 'components/socialLinks/svgs/EmailSVG'


const SocialLinks = () => {
    return(
        <div className="social-links">
            
            <div>
                <a href="https://www.linkedin.com/in/dwainebest/" role="button" aria-label="LinkedIn Profile"><LinkedinSVG /></a>
            </div>
            <div> 
            <a href="https://github.com/dwainetrain" role="button" aria-label="Github Profile"><GithubSVG /></a>
            </div>
            <div>
            <a href="mailto:dwaine.best@gmail.com" role="button" aria-label="Email Contact"><EmailSVG /></a>
            </div>
        </div>
    )
}

export default SocialLinks;