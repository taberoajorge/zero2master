import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterApp from './CounterApp';
import './index.css';

ReactDOM.render(<CounterApp value={2} />, document.getElementById('root'));
