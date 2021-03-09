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
      <a
        onClick={() => scrollTo('who')}
        href={'#who'}
        className={`navigation__link navigation__link--${aboutVisible}`}
      >
        About
      </a>
      <a
        onClick={() => scrollTo('what')}
        href={'#what'}
        className={`navigation__link navigation__link--${skillsVisible}`}
      >
        Skills
      </a>
      <a
        onClick={() => scrollTo('portfolio')}
        href={'#portfolio'}
        className={`navigation__link navigation__link--${portfolioVisible}`}
      >
        Portfolio
      </a>
      <a
        onClick={() => scrollTo('contact')}
        href={'#contact'}
        className={`navigation__link navigation__link--${contactVisible}`}
      >
        Contact
      </a>
      <div className='navigation__socials'>
        <div className='navigation__social-link'>
          <LinkedInIcon />
        </div>
        <div className='navigation__social-link'>
          <GitHubIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
