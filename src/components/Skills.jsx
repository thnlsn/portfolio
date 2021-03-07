import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className='section__skills'>
      {skills.map(({ img, skill }, i) => (
        <div className='section__skill text-emphasized' key={i}>
          {img}
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;
