#### Static serving my experience, accomplishments and ideas

_I wanted to create a site that quickly showcased the projects I've worked on, articles I've written and ideas I'm formulating_

[Github](https://github.com/dwainetrain/portfolio)

## Career Transition

Design portfolio and now developer portfolio. Previous portfolio (which you can still see here) was built using Wordpress and Elementor. I decided to challenge myself this time around and focus on a development portfolio that was hand-crafted and used modern tools like Gatsby, a Headless CMS and Continous Integration.

## The Design Process

Using Figma, I designed out my initial screens. My goals were to put my experiance first over any kind of flashy elements. SInce my audience is hiring managers or CEOs, I knew their time was limited, so I wanted to put my experiance first. If they wanted to explore further, then that was there also. Screenshots of design, outline of goals, inspiration. I was really inspired by sites that are part resume, part storage shed for ideas. And simple too. I would have plenty of time to explore creative outlets in other projects, but I wanted my portfolio just to be a shelf for these things.

## Race to MVP

Deadline spurred on by my course at UCSD. While I had plenty of ideas about what I wanted to add, I also had limited time to get a working site into place. So I wanted to build a system that was easy to add to. I did have to put some features from the design on the backburner as the crunch got closer, but since the site is built with modularity in mind, I finding developing those elements is much less painful.

## The Stack:

I wanted a tech stack that was modern and which would challenge me to step out of the wordpress eco-system. Luckily there are many powerful tools out there. I especially wanted speed. So I decided to go for a static site.

- Gatsby - Static site generator - React based and fast, other benefits and challenges. While it took me some time to wrap my head around Gatsby, at first, its power becomes evident when you upload it to the server. This site is fast! Here's my lighthouse score.

- GraphCMS (trying out alternatives to the CMS like wordpress) GraphCMS was super simple to setup and to get a schema going and to input data. Though I did face some challenges with their Markdown input. It's still a growing product and it's fun to experiment with what I can do with it. For instance, Pulling images in from GraphCMS and then using gaatsby-image, netlify bonus, setting up the schema. It's nativly GraphQL so it makes connecting to the data very simple. You can explore thier GraphQL tree right in your content view and then use that to help build out your queries in Gatsby.
  image of GraphCMS Schema

- SASS/SCSS - Organization of components. While I've been doing CSS for years, I had really never delved into SASS. WHat a shame! Excellent for organizing CSS into something manageble for larger projects. The ability to compartmentalize components with thier styles helps a great deal in keeping a project in order.

- Netlify with Github intergration - Continuos integration. Ok, now this is cool. I use netlify to build and host my live portfolio. The basic process is, I'm working on a dev branch of my portfolio and when I'm done working there, I can merge it into my main branch. This triggers Netlify to first build a preview before the merge so I can check for errors, then if all looks good I complete the merge and netlify builds the live site. I can also trigger a build from inside GraphCMS! Pretty slick.

- Storybook - Maybe later, when I actually get it working.

- What would be a good code snippet?
  Maybe of using observation observer to get the header working correctly. Not much else complicated here. Oh, I could also mention the sidebar on mobile and tablet.

- If you can pull it off. Pulling images from GraphCMS Markdown.

## The Future

Pictures of designs here too.
Mention what's in the works.
