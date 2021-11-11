import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {films} from './mocks/films';
import {reducer} from './store/reducer';
import {promo} from './mocks/films';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={films}
        filmPromo={promo}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
