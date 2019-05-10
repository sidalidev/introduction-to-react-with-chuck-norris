import React from 'react';
import Logo from './components/Logo';
import QuoteItem from './components/QuoteItem';
import QuoteNew from './components/QuoteNew';

function App() {
  return (
    <div className='App'>
      <Logo />
      <div className='QuotesWrapper'>
        <h3>Quotes</h3>
        <div className='QuoteList'>
          <QuoteItem />
          <QuoteItem />
          <QuoteItem />
          <QuoteItem />
          <QuoteItem />
          <QuoteItem />
          <QuoteItem />
        </div>
        <QuoteNew />
      </div>
    </div>
  );
}

export default App;
