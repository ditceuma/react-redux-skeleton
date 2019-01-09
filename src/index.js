import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import './index.css';
// Redux store
import configureStore from './shared/redux/configureStore'

import AppRoutes from './routes';
//COnfiguring Redux store
const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
    , document.getElementById('root'));
    
serviceWorker.unregister();
