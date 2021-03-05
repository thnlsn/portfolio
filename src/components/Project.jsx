import React from 'react';
// import GitHubIcon from './svg/GitHubIcon';
// import LinkIcon from './svg/LinkIcon';

const Project = ({ title, img, skills, paragraphs, links }) => {
  return (
    <div className='project'>
      <div className='project__heading'>{title}</div>
      <a
        className='project__img-link'
        target='_blank'
        rel='noopener noreferrer'
        href={links[1]}
      >
        <img className='project__img' src={img} alt={title} />
      </a>
      <div className='project__skills'>
        {skills.map((skill, i) => (
          <div className='project__skill' key={i}>
            {skill}
          </div>
        ))}
      </div>
      <div className='project__descriptions'>
        {paragraphs.map((paragraph, i) => (
          <p className='project__description' key={i}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className='project__links'>
        {links.map((link, i) => (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='project__link'
            key={i}
          >
            {i === 0 ? 'Repo' : 'Live Link'}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
