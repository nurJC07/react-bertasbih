import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Support/CSS/agency.css';
import './Support/CSS/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import{Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import './Support/fontawesome-free/css/fontawesome.min.css';
import'./Support/fontawesome-free/css/all.css';


// const store = createStore (reducer);
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
<Provider store={store}>
<BrowserRouter><App /></BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app tork offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
