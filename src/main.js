import React from "react"
import ReactDOM from "react-dom"
import StudiosList from "./components/StudiosList/StudiosList.jsx"
import { Link } from 'react-router';

import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';

import { Router, Route, hashHistory, browserHistory } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push, syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk';


import 'antd/dist/antd.css';        // for css
import 'antd/dist/antd.js';        // for css
import { Row, Col } from 'antd';
import { Badge } from 'antd';

import reducer from './reducers';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


const store = compose(applyMiddleware(thunk))(createStore)(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
        
            <div className="navbar">
                <div className="container">
                    <div className="wrapper">
                    <span onClick={e => window.location = '/'} className="logo" >Studios</span>
                    </div>
                </div>
            </div>

            <Router history={history}>
                <div>
                    <Route path="/" component={StudiosList} />
                    <Route path='*' exact={true} component={StudiosList} />
                </div>
                
            </Router>
        </div>
    </Provider>,
document.getElementById("app"));