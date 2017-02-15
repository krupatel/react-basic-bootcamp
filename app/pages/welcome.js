import React from 'react'
import { Link } from 'react-router'

export default class Welcome extends React.Component {
	render() {
		return (
			<div id="welcome-page">
				<div className="container">
					<div className="row">
						<h2>Welcome to dev bootcamp</h2>
						<Link to="/deck">Go to twitter deck.</Link>
					</div>
				</div>
			</div>
		)
	}
}