import React, { useState } from 'react';

import LinkedInIcon from './svg/LinkedInIcon';
import GitHubIcon from './svg/GitHubIcon';

const Navigation = ({}) => {
  const visibility = (visible) => (visible ? 'visible' : 'invisible');
  const [intersections, setIntersections] = useState({
    about: false,
    skills: false,
    portfolio: false,
    contact: false,
  });

  const sectionOptions = {
    root: null,
    threshold: 0.15,
  };

  // Function to highlight the tab in the nav as its section intersects
  const sectionHighlight = function (entries) {
    const [{ isIntersecting, target: section }] = entries;
    const sectionNum = section.id[section.id.length - 1]; // Section number
    const navigationLinks = document.querySelectorAll('.navigation__link'); // navlinks Nodelist
    console.log(sectionNum);
    if (isIntersecting) {
      console.log('butty');
    }
  };

  const allTabSections = document.querySelectorAll('.section');

  // Observer for each of the tabbed sections
  const tabSectionObserver = new IntersectionObserver(
    sectionHighlight,
    sectionOptions
  );
  // Observe each of the tabbed sections
  allTabSections.forEach((section) => {
    tabSectionObserver.observe(section);
  });

  return (
    <div className='navigation'>
      <div
        className={`navigation__link navigation__link--${intersections.about}`}
      >
        About
      </div>
      <div
        className={`navigation__link navigation__link--${intersections.skills}`}
      >
        Skills
      </div>
      <div
        className={`navigation__link navigation__link--${intersections.portfolio}`}
      >
        Portfolio
      </div>
      <div
        className={`navigation__link navigation__link--${intersections.contact}`}
      >
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
