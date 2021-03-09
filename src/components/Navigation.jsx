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
    <div className='navigation'>
      <div className={`navigation__link navigation__link--${aboutVisible}`}>
        About
      </div>
      <div className={`navigation__link navigation__link--${skillsVisible}`}>
        Skills
      </div>
      <div className={`navigation__link navigation__link--${portfolioVisible}`}>
        Portfolio
      </div>
      <div className={`navigation__link navigation__link--${contactVisible}`}>
        Contact
      </div>
      <div className='navigation__socials'>
        <div className='navigation__social-link'>
          <LinkedInIcon />
        </div>
        <div className='navigation__social-link'>
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
