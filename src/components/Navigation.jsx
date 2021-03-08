import React from 'react';

import LinkedInIcon from './svg/LinkedInIcon';
import GitHubIcon from './svg/GitHubIcon';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation__link '>About</div>
      <div className='navigation__link'>Portfolio</div>
      <div className='navigation__link'>Contact</div>
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
