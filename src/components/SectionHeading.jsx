import React from 'react';

import { useOnScreen } from '../hooks';

const SectionHeading = ({ heading }) => {
  /*     const [setRef, visible] = useOnScreen({
    rootMargin: '-200px',
  });

  const visibility = () => (visible ? 'visible' : 'invisible'); */

  const split = heading.split(' ');
  const emphasis = heading.split(' ')[0];
  const text = split.slice(1).join(' ');
  return (
    <div className={`heading-secondary`}>
      <span className='section__subject' data-subject={`#${emphasis}`}>
        #{emphasis}
      </span>{' '}
      {text}
    </div>
  );
};

export default SectionHeading;
