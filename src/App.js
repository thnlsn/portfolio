import React, { useEffect } from 'react';
import './css/style.css';

// Assets
import profile from './images/profile.jpg';

import project1 from './images/mind-garden.png';
import project2 from './images/electoral-map.png';
import project3 from './images/world-clock.png';
import project6 from './images/portfolio.png';

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
import Header from './components/Header';
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx';
import SectionHeading from './components/SectionHeading.jsx';

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

function App() {
  const initAnimations = () => {
    // console.log(document.querySelector('.header__image'));
    document
      .querySelector('.header__image')
      .classList.remove('header__image--init');

    document.querySelector('.divider').classList.remove('divider--init');
    document
      .querySelector('.heading-primary')
      .classList.remove('heading-primary--init');
    document
      .querySelector('.heading-subtitle')
      .classList.remove('heading-subtitle--init');
  };

  /*   const initParallax = () => {
    window.addEventListener('scroll', function (e) {
      const target = document.querySelector('.App');
      const scrolled = window.pageYOffset;
      const rate = scrolled * -2;
    });
  }; */

  useEffect(() => {
    initAnimations();
    // initParallax();
  }, []);

  return (
    <div className='App'>
      {/* <div className='background' /> */}
      <div className='navigation'></div>
      <div className='content'>
        {/* <div className='background' /> */}
        <Header img={profile} />
        <section className='section section--who'>
          <SectionHeading heading={'who I am'} />
          <p className='section__description'>
            A web developer on and off the clock and a student beyond the
            classroom. I am a natural problem solver and love spending my time
            coding and building responsive, functional, and beautiful websites.
            Check out my{' '}
            <a href={'#portfolio'} className='section--link'>
              work
            </a>{' '}
            to see what I mean!
          </p>
          <p className='section__description'>
            I’m currently available for projects no matter the scale.{' '}
            <a href={'#contact'} className='section--link'>
              Contact
            </a>{' '}
            me to get the ball rolling!
          </p>
        </section>

        <section className='section section--portfolio'>
          <SectionHeading heading={'what I can do'} />
          <p className='section__description'>
            Learning is a life style for me, and as such I am always eager for
            new challenges to tackle. At this moment I am proficient in the
            following technologies, but I am always looking to expand.
          </p>
          <Skills skills={skills} />
          <p className='section__description'>
            I have experience working on a team in an agile environment with
            Atlassian software Also, don't worry if something is missing &ndash;
            I pick things up pretty quick.
          </p>
        </section>

        <section className='section section--portfolio'>
          <SectionHeading heading={'portfolio of works'} />
          <p className='section__description'>
            Below is a list of some projects I've' worked on &ndash; a healthy
            mixture of paid and personal.{' '}
          </p>
          <p className='section__description'>
            Included are links to view the live hosted sites as well as the
            relevant GitHub repository, should you want to dig into my code.
          </p>
          <p className='section__description'>
            Everything is fully responsive. Check them them out on your phone or
            tablet!
          </p>

          <div className='section__portfolio'>
            <Project
              title='Mind Garden'
              img={project1}
              skills={['React', 'JavaScript', 'Sass', 'CSS', 'LocalStorage']}
              paragraphs={[
                'A daily planner that aims to help you start every day grounded. It is simple and lightweight by design, as productivity and habit building is best when sustainable.',
                'I chose not to use a back-end in favor of localStorage to avoid the need for a login, as to keep the app as streamlined as possible while retaining the ability to save data between sessions.',
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
                'My portfolio site! Yes, this one that you are currently browsing. Designed and developed by me.',
                'Designed with Figma, and hand-coded with my preferred front-end stack of React, Sass, and vanilla JavaScript.',
              ]}
              links={[
                'https://github.com/thnlsn/portfolio',
                'https://thomas-nelson-wd.netlify.app/',
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
