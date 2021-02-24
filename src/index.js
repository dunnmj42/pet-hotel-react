// React, Redux, Middlewares
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

// root reducer and root saga
import rootReducer from "./redux/reducers/_root.reducer"
import rootSaga from "./redux/sagas/_root.saga"

// App
import App from './components/App/App';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// SagaMiddleware and logger to Dev Env 
const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

// root store
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList)
);

// apply middleware
sagaMiddleware.run(rootSaga);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
