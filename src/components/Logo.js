import React from 'react';

const Logo = () => {
  return (
    <div className='LogoContainer'>
      <img src={require('../images/logo.png')} alt='Chuck Norris Logo' />
      <code>
        Logo from <a href='https://api.chucknorris.io/'>api.chucknorris.io</a>
      </code>
    </div>
  );
};

export default Logo;
