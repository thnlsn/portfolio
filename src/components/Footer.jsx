import React from 'react';

const Footer = ({ scroll }) => {
  return (
    <footer className='footer'>
      <div className='footer__text'>Thomas Nelson | 2021</div>
      <div className='footer__link' onClick={scroll}>
        Back to the top
      </div>
    </footer>
  );
};

export default Footer;
