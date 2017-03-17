import React from 'react'
import { Link } from 'react-router'
import Timer from '../components/timer'

export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			number :0
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount(){
		console.log("Component will mounted")
	}

	componentDidMount(){
		console.log("Component mounted")
	}

	handleClick(event) {
		console.log('Click Handler', event);
		this.setState({number: 10});
	}

	render() {
		return (
			<div className="container home">
				<div className="row">
					<div className="col-lg-12">
						<h2>Happy St Patrick's Day !!!</h2>
						<Link to="/deck">Go to twitter deck.{this.state.number}</Link>

						<button onClick={this.handleClick} >Click</button>
					</div>
				</div>
			</div>
		)
	}
}