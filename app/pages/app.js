import React from 'react'

import Navbar from '../components/navbar'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="viewport">
				<Navbar />
				{
					this.props.children
				}
			</div>
		)
	}
}
