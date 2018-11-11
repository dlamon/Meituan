import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Container from './components/Container';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>, document.getElementById('root')
);
