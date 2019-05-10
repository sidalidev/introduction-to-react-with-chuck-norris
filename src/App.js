import React, { Component } from 'react';
import axios from 'axios';
import Logo from './components/Logo';
import QuoteItem from './components/QuoteItem';
import QuoteNew from './components/QuoteNew';

const API_BASE_URL = 'https://api.chucknorris.io/jokes';

class App extends Component {
  state = {
    quote: {}
  };
  componentDidMount() {
    axios.get(API_BASE_URL + '/random').then(({ data }) => {
      this.setState({
        quote: data
      });
    });
  }

  render() {
    const { value } = this.state.quote;
    return (
      <div className='App'>
        <Logo />
        <div className='QuotesWrapper'>
          <h3>Citations en Engliche</h3>
          <div className='QuoteList'>
            <QuoteItem text={value} />
          </div>
          <QuoteNew />
        </div>
      </div>
    );
  }
}

export default App;
