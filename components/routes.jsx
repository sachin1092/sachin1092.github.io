import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import Test from 'test';

const loadRoute = callback => mod => callback(null, mod.default);

const errorLoading = err => console.error('Dynamic page loading failed', err);

ReactDOM.render((
	<Router history={browserHistory}>
			<Route path='/hello' component={Test} />
			<Route path='/' component={Test} />
	</Router>
), document.getElementById('root'));
