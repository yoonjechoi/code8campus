import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap';
import 'components/bootstrap.scss';

import App from 'components/App';
import {Provider} from 'react-redux';
import store from "reducers/configureStore";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
