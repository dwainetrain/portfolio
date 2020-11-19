import React from 'react';

import GithubSVG from 'components/socialLinks/svgs/GithubSVG'
import LinkedinSVG from 'components/socialLinks/svgs/LinkedinSVG'
import EmailSVG from 'components/socialLinks/svgs/EmailSVG'


const SocialLinks = () => {
    return(
        <div class="social-links">
            
            <div>
                <a href="https://www.linkedin.com/in/dwainebest/"><LinkedinSVG /></a>
            </div>
            <div>
            <a href="https://github.com/dwainetrain"><GithubSVG /></a>
            </div>
            <div>
            <a href="mailto:dwaine.best@gmail.com"><EmailSVG /></a>
            </div>
        </div>
    )
}

export default SocialLinks;