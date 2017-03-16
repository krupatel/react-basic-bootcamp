import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from 'pages/app'
import Home from 'pages/home'
import Deck from 'pages/deck'
import Timer from 'components/timer'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="home" component={Home}/>
			<Route path="deck" component={Deck}/>
			<Route path="timer" component={Timer}/>
		</Route>
	</Router>
	, document.querySelector('#app')
);