import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      movies={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
