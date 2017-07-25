import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={Home}/>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
