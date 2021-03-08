import React from 'react';

import Heading from './SectionHeading';

const Section = ({ heading, contents, margin, setRef, visible }) => {
  return (
    <section
      // visible is determined by the useOnScreen hook which is determined internally via intersection observer
      className={`section section--${visible}`}
      // setRef is setting the reference to this specific element in the DOM
      ref={setRef}
      // If you need a little extra spacing, you can pass in a margin value, otherwise it will just be 0
      style={{ marginTop: margin ? margin : '0' }}
    >
      <Heading heading={heading} />
      {/* Full contents of JSX markup, in order to allow this component to be an outer shell of markup too complicated or unknown to handle every case for */}
      {contents}
    </section>
  );
};

export default Section;
