import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FormContext from './context/FormContext';
import worker from './mocks/browser';

worker.start();
ReactDOM.render(
  <React.StrictMode>
    <FormContext>
      <App />
    </FormContext>
  </React.StrictMode>,
  document.getElementById('root'),
);
