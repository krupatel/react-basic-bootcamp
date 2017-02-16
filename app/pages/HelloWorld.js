import React from 'react'

export default class HelloWorld extends React.Component {
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
			<div id="">
				<div className="container">
					<div className="row">
						<h2>Welcome to dev bootcamp {this.props.name} !!</h2>
					</div>
				</div>
			</div>
		)
	}
}