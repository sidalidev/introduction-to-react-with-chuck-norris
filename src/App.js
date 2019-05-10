import React, { Component } from 'react';
import axios from 'axios';
import Logo from './components/Logo';
import QuoteItem from './components/QuoteItem';
import QuoteNew from './components/QuoteNew';

const API_BASE_URL = 'https://api.chucknorris.io/jokes';

class App extends Component {
  state = {
    quotes: []
  };
  componentDidMount() {}

  addRandomQuote(text) {
    // if (text) {
    // this.setState((currentState) => ({
    //   quotes: [...currentState.quotes, { value: text }]
    // }));
    // } else {
    axios.get(API_BASE_URL + '/random').then(({ data }) => {
      this.setState((currentState) => ({
        quotes: [...currentState.quotes, data]
      }));
    });
    // }
  }

  render() {
    const { quotes } = this.state;
    return (
      <div className='App'>
        <Logo />
        <div className='QuotesWrapper'>
          <h3>Citations en Engliche</h3>
          <div className='QuoteList'>
            {quotes.map(({ value }) => (
              <QuoteItem key={value} text={value} />
            ))}
          </div>
          <QuoteNew onMetalAdd={this.addRandomQuote.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
