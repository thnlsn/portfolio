import React from 'react';

const SectionHeading = ({ emphasis, text }) => {
  return (
    <div className={`heading-secondary`}>
      <span className='section__subject' data-subject={`//${emphasis}`}>
        {`//${emphasis}`}
      </span>{' '}
      {text}
    </div>
  );
};

export default SectionHeading;
