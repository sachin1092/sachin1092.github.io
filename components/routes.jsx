import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import Root from 'root';
import Left from 'left';
// import Right from 'right';

const loadRoute = callback => mod => callback(null, mod.default);

const errorLoading = err => console.error('Dynamic page loading failed', err);

ReactDOM.render((
	<Router history={browserHistory}>
			<Route path='/' component={Left} />
	</Router>
), document.getElementById('root'));
