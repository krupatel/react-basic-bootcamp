import React from 'react'
import { Link } from 'react-router'
import HelloWorld from './HelloWorld'
import Timer from '../components/timer'

export default class Welcome extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			count: 0
		}
	}

	componentWillMount(){
		this.setState((prevState) =>

		{count: 5});
		console.log("Component will mounted")
	}

	componentDidMount(){
		console.log("Component mounted")
	}
	someFunc(){

	}

	render() {
		return (
			<div id="welcome-page">
				<div className="container">
					<div className="row">
						<h2>Welcome to dev bootcamp {this.state.count}</h2>
						<HelloWorld name={this.someFunc} />
						<Timer counter={5}/>
						<Link to="/deck">Go to twitter deck.</Link>
					</div>
				</div>
			</div>
		)
	}
}