/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

export default () => {
  const [text, setText] = useState('');

  return (
    <div className='QuoteNew'>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        type='text'
        placeholder='Ta citation… '
      />
      <span className='Clickable' role='img'>
        🆕
      </span>
      <span className='Clickable' role='img'>
        🤘
      </span>
    </div>
  );
};
