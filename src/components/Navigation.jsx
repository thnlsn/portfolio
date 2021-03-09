import React from 'react';

import LinkedInIcon from './svg/LinkedInIcon';
import GitHubIcon from './svg/GitHubIcon';

const Navigation = ({
  aboutVisible,
  skillsVisible,
  portfolioVisible,
  contactVisible,
}) => {
  return (
    <nav className='navigation'>
      <a
        href={'#who'}
        className={`navigation__link navigation__link--${aboutVisible}`}
      >
        About
      </a>
      <a
        href={'#what'}
        className={`navigation__link navigation__link--${skillsVisible}`}
      >
        Skills
      </a>
      <a
        href={'#portfolio'}
        className={`navigation__link navigation__link--${portfolioVisible}`}
      >
        Portfolio
      </a>
      <a
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
