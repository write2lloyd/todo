import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Auth0Provider } from "@auth0/auth0-react";
import { composeWithDevTools } from 'redux-devtools-extension';

let middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

ReactDOM.render(
    <Provider store={ store }>
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN || ''}
        clientId={process.env.REACT_APP_CLIENTID || ''}
        redirectUri={window.location.origin}
      >
        <App/>
      </Auth0Provider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
