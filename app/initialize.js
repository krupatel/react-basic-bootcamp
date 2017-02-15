import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from 'pages/app'
import Welcome from 'pages/welcome'
import Deck from 'pages/deck'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Welcome}/>
			<Route path="welcome" component={Welcome}/>
			<Route path="deck" component={Deck}/>
		</Route>
	</Router>
	, document.querySelector('#app')
);