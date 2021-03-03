import React, { useEffect } from 'react';
import './css/style.css';

import profile from './images/profile.jpg';

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
        <header className='header'>
          <div className='header__image-container'>
            <img
              className='header__image header__image--init'
              src={profile}
              alt='Thomas Nelson'
            />
          </div>
          <div className='heading-primary heading-primary--init'>
            Thomas Nelson
          </div>
          <div className='divider divider--init'></div>
          <div className='heading-subtitle heading-subtitle--init'>
            web developer & problem-solver
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
