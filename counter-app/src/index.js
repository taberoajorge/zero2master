import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterApp from './CounterApp';
import './index.css';

ReactDOM.render(
  <App saludo={'holi'} other={1} />,
  document.getElementById('root')
);
