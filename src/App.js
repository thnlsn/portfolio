import React, { Fragment, useEffect } from 'react';
import './css/style.css';

/* Move ladder to main entrance room and move tree out of the way */

import { useOnScreen } from './hooks';

// Assets
import profile from './images/profile.jpg';

import project1 from './images/mind-garden.jpg';
import project2 from './images/electoral-map.jpg';
import project3 from './images/world-clock.jpg';
import project6 from './images/portfolio.jpg';

// Skills Icons
import ReactIcon from './components/svg/ReactIcon';
import HTMLIcon from './components/svg/HTMLIcon';
import CSSIcon from './components/svg/CSSIcon';
import JavaScriptIcon from './components/svg/JavaScriptIcon';
import SvelteIcon from './components/svg/SvelteIcon';
import SassIcon from './components/svg/SassIcon';
import GitIcon from './components/svg/GitIcon';
import GitHubIcon from './components/svg/GitHubIcon';
import NPMIcon from './components/svg/NPMIcon';
import NodeIcon from './components/svg/NodeIcon';
import ExpressIcon from './components/svg/ExpressIcon';
import MongoDBIcon from './components/svg/MongoDBIcon';
import MySQLIcon from './components/svg/MySQLIcon';
import AtlassianIcon from './components/svg/AtlassianIcon';
import FigmaIcon from './components/svg/FigmaIcon';
import JqueryIcon from './components/svg/JqueryIcon';
import BootstrapIcon from './components/svg/BootstrapIcon';
import HandlebarsIcon from './components/svg/HandlebarsIcon';
import APIIcon from './components/svg/APIIcon';
import ResponsiveIcon from './components/svg/ResponsiveIcon';

// Components
import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx';
import Section from './components/Section.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const skills = [
  { img: <HTMLIcon />, skill: 'HTML' },
  { img: <CSSIcon />, skill: 'CSS' },
  { img: <JavaScriptIcon />, skill: 'JavaScript' },
  { img: <ReactIcon />, skill: 'React' },
  { img: <SassIcon />, skill: 'Sass' },
  { img: <SvelteIcon />, skill: 'Svelte' },
  { img: <GitIcon />, skill: 'Git' },
  { img: <GitHubIcon />, skill: 'GitHub' },
  { img: <NodeIcon />, skill: 'Node' },
  { img: <NPMIcon />, skill: 'NPM' },
  { img: <ExpressIcon />, skill: 'Express' },
  { img: <MongoDBIcon />, skill: 'MongoDB' },
  { img: <MySQLIcon />, skill: 'MySQL' },
  { img: <AtlassianIcon />, skill: 'Atlassian' },
  { img: <FigmaIcon />, skill: 'Figma' },
  { img: <JqueryIcon />, skill: 'jQuery' },
  { img: <BootstrapIcon />, skill: 'Bootstrap' },
  { img: <HandlebarsIcon />, skill: 'Handlebars' },
  { img: <APIIcon />, skill: 'APIs' },
  { img: <ResponsiveIcon />, skill: 'Responsive Web Design' },
];

const visibility = (visible) => (visible ? 'visible' : 'invisible');

function App() {
  const content = document.querySelector('.content');
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  const [setAboutRef, aboutVisible] = useOnScreen({
    root: content,
    // rootMargin: `${vh / 3}px 0px -${vh / 3}px 0px`,
    rootMargin: `${(vh / 4) * 3}px 0px -${vh / 3}px 0px`,
  });
  const [setSkillsRef, skillsVisible] = useOnScreen({
    root: content,
    // rootMargin: `${vh / 3}px 0px -${vh / 3}px 0px`,
    rootMargin: `${(vh / 4) * 3}px 0px -${vh / 3}px 0px`,
  });
  const [setPortfolioRef, portfolioVisible] = useOnScreen({
    root: content,
    // rootMargin: `${vh / 3}px 0px -${vh / 3}px 0px`,
    rootMargin: `${(vh / 4) * 3}px 0px -${vh / 3}px 0px`,
  });
  const [setContactRef, contactVisible] = useOnScreen({
    root: content,
    // rootMargin: `${vh / 3}px 0px -${vh / 3}px 0px`,
    rootMargin: `${(vh / 4) * 3}px 0px -${vh / 3}px 0px`,
  });

  const scrollToSection = (section) => {
    document
      .querySelector(`[data-subject=${section}]`)
      .scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    document
      .querySelector('.content')
      .scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const HTMLComment = `               HAVE FUN DIGGING AROUND!                  
                                                           
                    #%&@@%&&&&#####%%                      
                @@@@&@@@@@@@%#&&@@&&&&%%                   
              @@@@@@@@@@@@&@@&@&%&@@@@@@&                  
            #@@@@@@@#(//*/(#%&&@@@@@@@@@@#                 
           ##&&@@@#/*,,,,,,,,,,***(%@@@@@@#                
          @##&@@@%/*,,,,,,,,,,,,,**/(%@@@@/%               
         &#&&@&@@%*,,.,,,,,,,,,,,,*//(&@@#(&&              
        &&@@@@@@#((###(**,,,,,,,,,,*/(&@#%&&&&&            
       %%&&@@@@(/,**(#((/***/(#&&&&&&&&@@&@@@@%&           
      %&&&&%@&*,,,***//*,..,*/%/@&&#/(@@@@@&@@&&&          
     %%%&&@@/....,,,,,,,,,,,*,,****,**(@@@@&&@&&&          
    @@@@@@@%,...,,,,*/.,.,,,,**/,,,,,,,/@@@@@@&&%%         
    #@@@@#%(,,,,,*/(*,,,*(((%*//*,,,,,,,@@@@@@@&%%%        
     (@@&@@%,,*,*(#,*///***/////#****,,,@#&@@@&&%*#        
       %@@@%,,**,,,,/.......,#@(#/*,*,,%@@@@@@@&//         
        @@@@#****,,,,,*****,,,,,,***,,/@@@@@@@%@@          
        &@@@@&//**,,,,,,,**,,*,,,**,*%@@@@@@@%%&#          
        *#@@@@,%((/*,,,,,,,,,,,,*//#%@@@@@@#(#%            
            #&,*/@&&%#(/*//(((##%(*,@(@@&%&*               
          %@&&,***/(&@@@@@@@@%(/((*,,*####&&%              
      /@%%%@&&*****//(#%%##%%#(,,/*(***%%&&                
    /*,@&#&@@(/*****//((%*(&@**///##%**%(///,              
  /(&%/@@/#&%(/******//%&@&&@@*#%***#/,,*/##/**#/*,,       
%#/%#%@@@&&@@@********((##(%&/*/&&###/*/((/,**,*#%*//*,    `;
    document.body.insertAdjacentHTML('afterbegin', `<!-- ${HTMLComment} -->`);
  }, []);

  return (
    <div className='App'>
      {/* <div className='background' /> */}
      <Navigation scrollTo={scrollToSection} />
      <div className='content'>
        <Header img={profile} />

        {/*
        ABOUT SECTION
        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        */}
        <Section
          heading={'who I am'}
          contents={
            <Fragment>
              <p className='section__description'>
                A web developer on and off the clock and a student beyond the
                classroom. I am a problem solver at heart, with a keen eye
                towards responsiveness. Check out my{' '}
                <a
                  onClick={() => {
                    scrollToSection("'#portfolio'");
                  }}
                  href={'#portfolio'}
                  className='section--link'
                >
                  work
                </a>{' '}
                to check out what I'm talking about!
              </p>
              <p className='section__description'>
                I am currently avaiable for any kind of work.{' '}
                <a
                  onClick={() => {
                    scrollToSection("'#contact'");
                  }}
                  href={'#contact'}
                  className='section--link'
                >
                  Contact
                </a>{' '}
                me to get the ball rolling!
              </p>
            </Fragment>
          }
          setRef={setAboutRef}
          visible={visibility(aboutVisible)}
          num={1}
        />

        {/*
        SKILLS SECTION
        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        */}
        <Section
          heading={'what I can do'}
          contents={
            <Fragment>
              <p className='section__description'>
                Learning is a lifestyle for me, and as such I am always eager
                for new challenges to tackle. At this moment I am proficient in
                the following technologies, but I am always looking to expand.
              </p>
              <Skills skills={skills} />
              <p className='section__description'>
                I have experience working on a team in an agile (scrum & sprint)
                environment using Atlassian software, but I also enjoy working
                independently. Also, don't worry if a skill is missing &ndash; I
                pick things up pretty quick.
              </p>
            </Fragment>
          }
          setRef={setSkillsRef}
          visible={visibility(skillsVisible)}
          num={2}
        />

        {/*
        PORTFOLIO SECTION
        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        */}

        <Section
          heading={'portfolio of work'}
          contents={
            <Fragment>
              <p className='section__description'>
                Below is a mixture of some projects I've worked on &ndash;
                personal, paid, and/or for practice{' '}
              </p>
              <p className='section__description'>
                Included are links to view the live hosted sites as well as the
                relevant GitHub repository, should you want to dig into my code.
              </p>
              <p className='section__description'>
                Everything is fully responsive. Check them them out on your
                phone or tablet!
              </p>

              <div className={`section__portfolio`}>
                <Project
                  title='Mind Garden'
                  img={project1}
                  skills={[
                    'React',
                    'JavaScript',
                    'Sass',
                    'CSS',
                    'localStorage',
                  ]}
                  paragraphs={[
                    'A daily planner that aims to help you start every day grounded. It is simple and streamlined by design, as productivity and habit building is best when kept sustainable.',
                    'I elected not to use a database in favor of localStorage to avoid the need for a login, as to keep the app as streamlined as possible while retaining the ability to save data between sessions.',
                  ]}
                  links={[
                    'https://github.com/thnlsn/mind-garden',
                    'https://thnlsn.github.io/mind-garden/',
                  ]}
                />
                <Project
                  title='Electoral Map'
                  img={project2}
                  skills={['React', 'JavaScript', 'Sass', 'CSS', 'SVG']}
                  paragraphs={[
                    'An interactive map of the United States electoral college. Paint each state by color to calculate a mock presidential election. You can also visualize the map by point density.',
                    'The map was created using SVG, which is how each state is able to be individually selected and dynamically updated.',
                  ]}
                  links={[
                    'https://github.com/thnlsn/electoral-map',
                    'https://thnlsn.github.io/electoral-map/',
                  ]}
                />
                <Project
                  title='World Clock'
                  img={project3}
                  skills={[
                    'React',
                    'JavaScript',
                    'Sass',
                    'CSS',
                    'Moment.js',
                    'Emotion.js',
                  ]}
                  paragraphs={[
                    'A real-time updating analog clock of your timezone. You can click other timezones generated and watch the clock update.',
                    'The clock itself was made with pure CSS (with help from Sass) and the live updating is done with JavaScript and Emotion.js to calculate and update the rotation of the hands, with Moment.js supplying the timezone data.',
                  ]}
                  links={[
                    'https://github.com/thnlsn/world-clock',
                    'https://thnlsn.github.io/world-clock/',
                  ]}
                />
                <Project
                  title='My Portfolio'
                  img={project6}
                  skills={['React', 'JavaScript', 'Sass', 'CSS']}
                  paragraphs={[
                    'My portfolio site! The one you are currently browsing.',
                    'Coded from scratch with my preferred front-end stack of React, Sass, and vanilla JavaScript. The contact form below is serverless – handled by JavaScript and relayed to me via Netlify forms.',
                  ]}
                  links={[
                    'https://github.com/thnlsn/portfolio',
                    'https://thomas-nelson-wd.netlify.app/',
                  ]}
                />
              </div>
            </Fragment>
          }
          setRef={setPortfolioRef}
          visible={visibility(portfolioVisible)}
          margin={'2rem'}
          num={3}
        />

        {/*
        CONTACT SECTION
        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        */}
        <Section
          heading={'contact me'}
          contents={
            <Fragment>
              <p className='section__description'>
                Need a website? Are you a recruiter or company with a vacancy
                I'd be a good fit for? Please get in touch either through my
                email address at{' '}
                <a
                  className='section--emphasis'
                  href='mailto:thnlsn.dev@gmail.com'
                >
                  thnlsn@gmail.com
                </a>{' '}
                or the form below. If needed, I can provide references.
              </p>

              <Contact
                placeholders={{
                  name: 'Your name',
                  email: 'Email address',
                  message: 'What can I do for you?',
                }}
                btnText='Send!'
              />
            </Fragment>
          }
          setRef={setContactRef}
          visible={visibility(contactVisible)}
          num={4}
        />

        <Footer scroll={scrollToTop} />
      </div>
    </div>
  );
}

export default App;
