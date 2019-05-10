import React, { Component } from 'react';
// import axios from 'axios';
import Logo from './components/Logo';
import QuoteItem from './components/QuoteItem';
import QuoteNew from './components/QuoteNew';

// const API_BASE_URL = 'https://api.chucknorris.io/jokes';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Logo />
        <div className='QuotesWrapper'>
          <h3>Citations en Engliche</h3>
          <div className='QuoteList'>
            <QuoteItem />
          </div>
          <QuoteNew />
        </div>
      </div>
    );
  }
}

export default App;
