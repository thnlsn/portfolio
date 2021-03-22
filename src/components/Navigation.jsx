import React, { useState, useEffect } from 'react';

import LinkedInIcon from './svg/LinkedInIcon';
import GitHubIcon from './svg/GitHubIcon';

console.log(document);
const Navigation = ({ scrollTo }) => {
  const [visibility, setVisibility] = useState([false, false, false, false]);
  let content;
  let navWidth;
  let rightWidth;

  // Options for all section enter effects, so for the 3 tab sections highlighting their tabs in the navbar as well as the sections themselves appearing when they get close enough
  let sectionOptions = {};

  // Function to highlight the tab in the nav as its section intersects
  const sectionHighlight = function (entries) {
    console.log(entries);
    const [{ isIntersecting, target: section }] = entries;
    const sectionNum = +section.id - 1; // Section number
    let copy = [...visibility];
    if (isIntersecting) {
      // When a new section is intersected, transform all to default (so that there is never 2 tabs being transformed up)
      setVisibility(copy.map((link) => (link = false)));
      // The one that was intersected should be the only one transformed up
      copy[sectionNum] = true;
      setVisibility(copy);
      // Else is for the case of the last section, when there are no more intersections to take place, which would leave the last tab transformed up even when left, so target the tab that is NO longer intersecting, and transform it back down
    } else {
      copy[sectionNum] = false;
    }
  };

  useEffect(() => {
    // Select all tab sections (not the contact section) by targetting all sections with id's prefixed with section (since contact doesn't have an id and all the other sections do, but with different suffixes/BEM modifiers)
    const allTabSections = document.querySelectorAll('.section-container');
    // console.log(allTabSections);

    const vh = window.innerHeight;
    const vw = window.innerWidth;
    content = document.querySelector('.content');
    navWidth = document.querySelector('.navigation').offsetWidth;
    rightWidth = vw - (navWidth + content.clientWidth);
    console.log(vw);
    console.log(rightWidth);
    sectionOptions = {
      root: content,
      // rootMargin: `${vh / 3}px 0px -${vh / 3}px 0px`,
      rootMargin: `-${vh / 3}px ${vw > 600 && vw < 800 ? 20 : rightWidth}px -${
        vh / 3
      }px -${vw > 600 && vw < 800 ? 20 : navWidth}px`,
    };

    // Observer for each of the tabbed sections
    const tabSectionObserver = new IntersectionObserver(
      sectionHighlight,
      sectionOptions
    );
    // Observe each of the tabbed sections
    allTabSections.forEach((section) => {
      tabSectionObserver.observe(section);
    });
  }, []);

  return (
    <nav className='navigation heading-navigation'>
      <a
        href={'#who'}
        onClick={() => scrollTo("'#who'")}
        className={`navigation__link navigation__link--${visibility[0]}`}
      >
        <span>About</span>
      </a>
      <a
        href={'#what'}
        onClick={() => scrollTo("'#what'")}
        className={`navigation__link navigation__link--${visibility[1]}`}
      >
        <span>Skills</span>
      </a>
      <a
        href={'#portfolio'}
        onClick={() => scrollTo("'#portfolio'")}
        className={`navigation__link navigation__link--${visibility[2]}`}
      >
        <span>Portfolio</span>
      </a>
      <a
        href={'#contact'}
        onClick={() => scrollTo("'#contact'")}
        className={`navigation__link navigation__link--${visibility[3]}`}
      >
        <span>Contact</span>
      </a>
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
