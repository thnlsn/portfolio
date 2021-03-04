import React from 'react';

const Header = ({ img }) => {
  return (
    <header className='header'>
      <div className='header__image-container'>
        <img
          className='header__image header__image--init'
          src={img}
          alt='Thomas Nelson'
        />
      </div>
      <div className='heading-primary heading-primary--init'>Thomas Nelson</div>
      <div className='divider divider--init'></div>
      <div className='heading-subtitle heading-subtitle--init'>
        web developer & problem solver
      </div>
    </header>
  );
};

export default Header;
