import React, { useEffect } from 'react';
import './css/style.css';

// Assets
import profile from './images/profile.jpg';

import project1 from './images/mind-garden.png';
import project2 from './images/electoral-map.png';
import project3 from './images/world-clock.png';

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
import JqueryIcon from './components/svg/JqueryIcon';
import BootstrapIcon from './components/svg/BootstrapIcon';
import HandlebarsIcon from './components/svg/HandlebarsIcon';
import APIIcon from './components/svg/APIIcon';
import ResponsiveIcon from './components/svg/ResponsiveIcon';

// Components
import Header from './components/Header';
import Project from './components/Project.jsx';

function App() {
  const initAnimations = () => {
    console.log(document.querySelector('.header__image'));
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

  const initParallax = () => {
    window.addEventListener('scroll', function (e) {
      const target = document.querySelector('.App');
      const scrolled = window.pageYOffset;
      const rate = scrolled * -2;
    });
  };

  useEffect(() => {
    initAnimations();
    initParallax();
  }, []);

  return (
    <div className='App'>
      {/* <div className='background' /> */}
      <div className='navigation'></div>
      <div className='content'>
        {/* <div className='background' /> */}
        <Header img={profile} />
        <section className='section section--who'>
          <div className='heading-secondary'>
            <span className='section__subject ' data-subject={'#who'}>
              #who
            </span>{' '}
            I am
          </div>
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
          <div className='heading-secondary'>
            <span className='section__subject ' data-subject={'#what'}>
              #what
            </span>{' '}
            I can do
          </div>
          <p className='section__description'>
            Learning is a life style for me, and as such I am always eager for
            new challenges to tackle. At this moment I am proficient in the
            following technologies, but I am always looking to expand.
          </p>
          <div className='section__skills'>
            <div className='section__skill'>
              <HTMLIcon />
              HTML
            </div>
            <div className='section__skill'>
              <CSSIcon />
              CSS
            </div>
            <div className='section__skill'>
              <JavaScriptIcon />
              JavaScript
            </div>
            <div className='section__skill'>
              <ReactIcon />
              React
            </div>
            <div className='section__skill'>
              <SvelteIcon />
              Svelte
            </div>
            <div className='section__skill'>
              <SassIcon />
              Sass
            </div>
            <div className='section__skill'>
              <GitIcon />
              Git
            </div>
            <div className='section__skill'>
              <GitHubIcon />
              GitHub
            </div>
            <div className='section__skill'>
              <NPMIcon />
              NPM
            </div>
            <div className='section__skill'>
              <NodeIcon />
              Node
            </div>
            <div className='section__skill'>
              <ExpressIcon />
              Express
            </div>
            <div className='section__skill'>
              <MongoDBIcon />
              MongoDB
            </div>
            <div className='section__skill'>
              <MySQLIcon />
              MySQL
            </div>
            <div className='section__skill'>
              <AtlassianIcon />
              Atlassian
            </div>
            <div className='section__skill'>
              <JqueryIcon />
              jQuery
            </div>
            <div className='section__skill'>
              <BootstrapIcon />
              Bootstrap
            </div>
            <div className='section__skill'>
              <HandlebarsIcon />
              Handlebars
            </div>
            <div className='section__skill'>
              <APIIcon />
              APIs
            </div>
            <div className='section__skill'>
              <ResponsiveIcon />
              Responsive Web Design
            </div>
          </div>
          <p className='section__description'>
            Don't worry if something is missing &ndash; I pick things up pretty
            quick.
          </p>
        </section>

        <section className='section section--portfolio'>
          <div className='heading-secondary'>
            <span className='section__subject ' data-subject={'#portfolio'}>
              #portfolio
            </span>{' '}
            of works
          </div>
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
              skills={[
                'React',
                'JavaScript',
                'Sass',
                'CSS',
                'HTML',
                'LocalStorage',
              ]}
              paragraphs={[
                'A daily planner that aims to help you start every day grounded. It is simple and straightforward by design, as building new habits and productivity overall is destroyed when you overwhelm yourself. Keeping it focused and achievable is a recipe for success.',
                'I chose not to use a back-end in favor of localStorage to avoid the need for a login, as to keep the app as lightweight and streamlined as possible. It is meant to be easy to use, in and out in a flash — only checking back every once a while to keep track of your tasks and reset for a new day.',
              ]}
              links={[
                'https://github.com/thnlsn/mind-garden',
                'https://thnlsn.github.io/mind-garden/',
              ]}
            />
            <Project
              title='Electoral Map'
              img={project2}
              skills={['React', 'JavaScript', 'Sass', 'CSS', 'HTML', 'SVG']}
              paragraphs={[
                "An interactive map of the United States electoral college. Select a color (or don't to cycle through them) to paint them a party in order to calculate a mock presidential election. You can click the visualize button to view the states colored by point density, so the more points they represent, the darker they will appear.",
                'The map was created using SVG, which is how each state in the image is able to be individually selected and updated dynamically.',
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
                'HTML',
                'Moment.js',
                'Emotion.js',
              ]}
              paragraphs={[
                'A live updating analog clock of your timezone. You can click other timezones generated by Moment.js and watch the clock update.It was originally built as a take-home project for a job I had applied to. I took the original project of creating a counter application and added some extra functionality to make it what you see today.',
                'The clock itself was made with pure CSS (with help from Sass) and the live updating is done with JavaScript and Emotion.js.',
              ]}
              links={[
                'https://github.com/thnlsn/world-clock',
                'https://thnlsn.github.io/world-clock/',
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
