import React from 'react';

const SectionHeading = ({ heading }) => {
  const split = heading.split(' ');
  const emphasis = heading.split(' ')[0];
  const text = split.slice(1).join(' ');
  return (
    <div className='heading-secondary'>
      <span className='section__subject ' data-subject={`#${emphasis}`}>
        #{emphasis}
      </span>{' '}
      {text}
    </div>
  );
};

export default SectionHeading;
