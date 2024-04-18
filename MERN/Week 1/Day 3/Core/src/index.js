import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <h1>Hello</h1>
  <h2>Things I need to do:</h2>
  <ul>
    <li>Learn React</li>
    <li>Climb Mt.Everest</li>
    <li>Run a marathon</li>
    <li>Feed the dogs</li>
  </ul>
</div>);
reportWebVitals();
