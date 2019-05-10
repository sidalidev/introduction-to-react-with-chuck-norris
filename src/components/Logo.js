import React from 'react';

const Logo = () => {
  return (
    <div className='LogoContainer'>
      <img src={require('../images/logo.png')} alt='Chuck Norris Logo' />
      <small>
        Credits goes to{' '}
        <a href='https://api.chucknorris.io/'>api.chucknorris.io</a> for the
        logo
      </small>
    </div>
  );
};

export default Logo;
