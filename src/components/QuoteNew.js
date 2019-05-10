/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

export default (props) => {
  const [text, setText] = useState('');

  return (
    <div className='QuoteNew'>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        type='text'
        placeholder='Ta citation… '
      />
      <span
        onClick={() => {
          props.onMetalAdd(text);
        }}
        className='Clickable'
        role='img'
      >
        🆕
      </span>
      <span onClick={props.onMetalAdd} className='Clickable' role='img'>
        🤘
      </span>
    </div>
  );
};
