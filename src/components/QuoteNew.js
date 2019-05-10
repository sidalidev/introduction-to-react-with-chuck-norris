/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

export default class QuoteNew extends React.Component {
  render() {
    return (
      <div className='QuoteNew'>
        <input type='text' placeholder='Ta citation… ' />
        <span className='Clickable' role='img'>
          🆕
        </span>
        <span className='Clickable' role='img'>
          🤘
        </span>
      </div>
    );
  }
}
