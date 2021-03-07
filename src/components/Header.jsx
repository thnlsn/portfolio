import React from 'react';

import { useOnScreen } from '../hooks';

const Header = ({ img }) => {
  // Initially these values will not do anything, but because of the useEffect watching ref* in useOnScreen, setRef will change ref* and cause useEffect to run again
  const [setRef, visible] = useOnScreen({
    threshold: '1',
  });

  const visibility = () => (visible ? 'visible' : 'invisible');
  return (
    // When we set ref to call setRef, it will reload because the useEffect has changed ref, one of the variables it is watching
    // visible won't yet be true, but the moment the observer realizes it is intersecting, it will change it to true in it's cb, and since the useEffect is watching visible, it will run again and return visible as true this time.
    <header className='header' ref={setRef}>
      <div className='header__image-container'>
        <img
          className={`header__image header__image--${visibility()}`}
          src={img}
          alt='Thomas Nelson'
        />
      </div>
      <div className={`heading-primary heading-primary--${visibility()}`}>
        Thomas Nelson
      </div>
      <div className={`divider divider--${visibility()}`}></div>
      <div className={`heading-subtitle heading-subtitle--${visibility()}`}>
        web developer & problem solver
      </div>
    </header>
  );
};

export default Header;
