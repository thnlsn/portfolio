import React from 'react';

import Heading from './SectionHeading';

const Section = ({ heading, contents, margin, setRef, visible }) => {
  const split = heading.split(' ');
  const emphasis = heading.split(' ')[0];
  const text = split.slice(1).join(' ');
  return (
    <div
      className='section-container'
      ref={setRef}
      data-subject={`#${emphasis}`}
    >
      <section
        // visible is determined by the useOnScreen hook which is determined internally via intersection observer
        className={`section section--${visible}`}
        // setRef is setting the reference to this specific element in the DOM
        // If you need a little extra spacing, you can pass in a margin value, otherwise it will just be 0
        style={{ marginBottom: margin ? margin : '0' }}
      >
        <Heading emphasis={emphasis} text={text} />
        {/* Full contents of JSX markup, in order to allow this component to be an outer shell of markup too complicated or unknown to handle every case for */}
        {contents}
      </section>
    </div>
  );
};

export default Section;
