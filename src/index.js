import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');

// Create a reusable render method that we can call more than once
const render = () => {
  // Dynamically import our main App component, and render it
  ReactDOM.render(<App />, rootEl);
};

if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App />, rootEl);
  });
}

render();
