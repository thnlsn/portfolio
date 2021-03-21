import React from 'react';

const Footer = ({ scroll }) => {
  return (
    <footer className='footer'>
      <div className='footer__text'>
        Thomas Nelson <span className='footer__divider'>|</span> 2021
      </div>
      <div className='footer__link' onClick={scroll}>
        <span className='section--link u-underline'>Back to top</span>
      </div>
    </footer>
  );
};

export default Footer;
