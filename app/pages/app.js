import React from 'react'
import NavigationBar from '../components/navbar'
import Footer from '../components/footer'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="app">
				<div className="page-wrap">
					<NavigationBar />
					{
						this.props.children
					}
				</div>
				<Footer />
			</div>
		)
	}
}
