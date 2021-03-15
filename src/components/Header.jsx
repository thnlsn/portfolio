import React from 'react';

import LinkedInIcon from './svg/LinkedInIcon';
import GitHubIcon from './svg/GitHubIcon';

import { useOnScreen } from '../hooks';

const Header = ({ img }) => {
  // Initially these values will not do anything, but because of the useEffect watching ref* in useOnScreen, setRef will change ref* and cause useEffect to run again
  const [setRef, visible] = useOnScreen({
    threshold: 1,
  });

  const visibility = () => (visible ? 'visible' : 'invisible');
  return (
    // When we set ref to call setRef, it will reload because the useEffect has changed ref, one of the variables it is watching
    // visible won't yet be true, but the moment the observer realizes it is intersecting, it will change it to true in it's cb, and since the useEffect is watching visible, it will run again and return visible as true this time.
    <header
      className={`header header--${visibility()}`}
      ref={setRef}
      data-subject={`#who`}
    >
      <div className='header__image-container'>
        <img className='header__image' src={img} alt='Thomas Nelson' />
      </div>
      <div className='heading-primary'>Thomas Nelson</div>
      <div className='divider'></div>
      <div className='heading-subtitle'>web developer & problem solver</div>
      <a
        href='./files/Thomas_Nelson_Resume.pdf'
        target='_blank'
        className='header__resume'
      >
        Download Resume
      </a>
      <div className='header__socials'>
        <a
          href={'https://www.linkedin.com/in/thnlsn/'}
          rel='noopener noreferrer'
          target='_blank'
          className='navigation__social-link'
        >
          <LinkedInIcon />
        </a>
        <a
          href={'https://github.com/thnlsn'}
          rel='noopener noreferrer'
          target='_blank'
          className='navigation__social-link'
        >
          <GitHubIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
