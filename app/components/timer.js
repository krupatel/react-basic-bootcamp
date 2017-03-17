import React from 'react'

export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			secondsElapsed: this.props.counter || 0
		};
	}

	tick() {
		this.setState((prevState) => ({
			secondsElapsed: prevState.secondsElapsed + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h1>Seconds Elapsed: {this.state.secondsElapsed}</h1>
				</div>
			</div>
		);
	}
}