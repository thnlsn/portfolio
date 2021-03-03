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
            <span
              className='section--emphasis section--subject'
              data-subject={'#who'}
            >
              #who
            </span>{' '}
            I am
          </div>
          <p className='section__description'>
            A web developer on and off the clock and a student beyond the
            classroom. I love spending my time coding and building websites that
            are robust, functional, and beautiful. Check out my{' '}
            <a href={'#portfolio'} className='section--emphasis'>
              work
            </a>{' '}
            to see what I mean!
          </p>
          <p className='section__description'>
            I’m currently available for projects no matter the scale.{' '}
            <a href={'#contact'} className='section--emphasis'>
              Contact
            </a>{' '}
            me to discuss.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
