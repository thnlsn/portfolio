import React, { useEffect } from 'react';
import './css/style.css';

// Assets
import profile from './images/profile.jpg';

import project1 from './images/mind-garden.png';

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

          <div className='section__portfolio'>
            <div className='project'>
              <div className='project__heading'>Mind Garden</div>
              <img className='project__img' src={project1} alt='Mind Garden' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
