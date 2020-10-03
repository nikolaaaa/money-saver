import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/main.scss';
import Stores from './js/stores';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider Stores={Stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
