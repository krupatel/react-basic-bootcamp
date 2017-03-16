import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
		console.log("Component will mounted")
	}

	componentDidMount(){
		console.log("Component mounted")
	}

	render() {
		return (
			<div className="container home">
				<div className="row">
					<div className="col-lg-3">
						<img src="http://www.theholidayspot.com/patrick/images/st-patricks-day-beer.jpg" />
					</div>
					<div className="col-lg-9">
						<h2>Welcome to DEV Bootcamp !!!</h2>
						<p>Happy St Patrick's Day !!!</p>
						<Link to="/deck">Go to twitter deck.</Link>
					</div>
				</div>
			</div>
		)
	}
}