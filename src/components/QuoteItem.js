import React from 'react';

const Quote = ({ text }) => {
  return (
    <div className='QuoteItem'>
      <p>"{text}"</p>
      <span className='Clickable'>🗑</span>
    </div>
  );
};

export default Quote;
