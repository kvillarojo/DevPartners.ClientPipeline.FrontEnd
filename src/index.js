import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'
// import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
// import { Router } from "react-router";
// import { createBrowserHistory } from "history";

// Initialize store
const store = configureStore();

// Initialize browser history
// const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>  
      <App />
    </Provider>, document.getElementById('root')
);

// registerServiceWorker();