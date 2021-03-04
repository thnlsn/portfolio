import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className='section__skills'>
      {skills.map(({ img, skill }) => (
        <div className='section__skill'>
          {img}
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;
