import React from 'react'
import NavigationBar from '../components/navbar'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="app">
				<NavigationBar />
				<div className="content">
					{
						this.props.children
					}
				</div>
			</div>
		)
	}
}
