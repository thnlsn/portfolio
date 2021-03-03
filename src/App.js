import React, { useEffect } from 'react';
import './css/style.css';

import profile from './images/profile.jpg';

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

  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <div className='App'>
      <div className='navigation'></div>
      <div className='content'>
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
            classroom. I love spending my time coding and building websites that
            are robust, functional, and beautiful. Check out my{' '}
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
            me to discuss.
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
            Learning is a lifestyle for me so I strive to learn something new
            every single day, and I never shy away from a challenge. At this
            moment I am proficient in the following technologies, but I am
            always adding to the list.
          </p>
          <div className='section__skills'>
            <div className='section__skill'>HTML</div>
            <div className='section__skill'>CSS</div>
            <div className='section__skill'>JavaScript</div>
            <div className='section__skill'>React</div>
            <div className='section__skill'>Sass</div>
            <div className='section__skill'>Git</div>
            <div className='section__skill'>GitHub</div>
            <div className='section__skill'>NPM</div>
            <div className='section__skill'>Node</div>
            <div className='section__skill'>Express</div>
            <div className='section__skill'>MongoDB</div>
            <div className='section__skill'>MySQL</div>
            <div className='section__skill'>APIs</div>
            <div className='section__skill'>Responsive Web Design</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
