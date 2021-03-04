import React from 'react';

const Project = ({ title, img, skills, paragraphs, links }) => {
  return (
    <div className='project'>
      <div className='project__heading'>{title}</div>
      <img className='project__img' src={img} alt={title} />
      <div className='project__skills'>
        {skills.map((skill) => (
          <div className='project__skill'>{skill}</div>
        ))}
      </div>
      <div className='project__descriptions'>
        {paragraphs.map((paragraph) => (
          <p className='project__description'>{paragraph}</p>
        ))}
      </div>
      <div className='links'>
        {links.map((link) => (
          <a href={link} className='project__link'></a>
        ))}
      </div>
    </div>
  );
};

export default Project;
