import React from 'react'
import {Link} from 'react-router'

export default class NavigationBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand" >Dev Bootcamp</Link>
					</div>
					<div className="navbar-right">
						<a className="git-hub-link" href="https://github.com/krupatel/react-basic-bootcamp" target="_blank"> Git hub link</a>
					</div>
				</div>
			</nav>
		)
	}
}