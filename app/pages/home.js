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
					<h2>Welcome to DEV Bootcamp !!!</h2>
					<Link to="/deck">Go to twitter deck.</Link>
				</div>
			</div>
		)
	}
}