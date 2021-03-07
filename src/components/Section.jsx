import React from 'react';

import Heading from './SectionHeading';

const Section = ({ heading, contents }) => {
  return (
    <section className='section'>
      <Heading heading={heading} />
      {contents}
    </section>
  );
};

export default Section;
