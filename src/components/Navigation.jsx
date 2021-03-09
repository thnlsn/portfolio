import React from 'react';

import LinkedInIcon from './svg/LinkedInIcon';
import GitHubIcon from './svg/GitHubIcon';

const Navigation = ({
  scrollTo,
  aboutVisible,
  skillsVisible,
  portfolioVisible,
  contactVisible,
}) => {
  return (
    <nav className='navigation'>
      <button
        onClick={() => scrollTo("'#who'")}
        className={`navigation__link navigation__link--${aboutVisible}`}
      >
        About
      </button>
      <button
        onClick={() => scrollTo("'#what'")}
        className={`navigation__link navigation__link--${skillsVisible}`}
      >
        Skills
      </button>
      <button
        onClick={() => scrollTo("'#portfolio'")}
        className={`navigation__link navigation__link--${portfolioVisible}`}
      >
        Portfolio
      </button>
      <button
        onClick={() => scrollTo("'#contact'")}
        className={`navigation__link navigation__link--${contactVisible}`}
      >
        Contact
      </button>
      <div className='navigation__socials'>
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
    </nav>
  );
};

export default Navigation;
