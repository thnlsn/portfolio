import React from 'react';
import './css/style.css';

import profile from './images/profile.jpg';

function App() {
  return (
    <div className='App'>
      <div className='navigation'></div>
      <div className='content'>
        <header className='header'>
          <img
            className='heading-image'
            src={profile}
            alt='Thomas Nelson'
          ></img>
          <div className='heading-primary'>Thomas Nelson</div>
          <div className='heading-subtitle'>web developer & problem-solver</div>
        </header>
      </div>
    </div>
  );
}

export default App;
