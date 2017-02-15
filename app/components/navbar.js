import React from 'react'

export default class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Dev Bootcamp</a>
					</div>
					<div className="navbar-right">
						<a className="git-hub-link" href="https://github.com/krupatel/react-basic-bootcamp" target="_blank"> Git hub link</a>
					</div>
				</div>
			</nav>
		)
	}
}