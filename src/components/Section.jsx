import React from 'react';

import Heading from './SectionHeading';

import { useOnScreen } from '../hooks';

const Section = ({ heading, contents }) => {
  const [setRef, visible] = useOnScreen({
    rootMargin: '-200px',
  });

  const visibility = () => (visible ? 'visible' : 'invisible');

  return (
    <section className={`section section--${visibility()}`} ref={setRef}>
      <Heading heading={heading} />
      {contents}
    </section>
  );
};

export default Section;
