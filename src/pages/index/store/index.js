import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import model from './model';
import reducers from './reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f)(createStore)(reducers);
  sagaMiddleware.run(model);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
