import React from 'react'
import DeckList from "./deck-list"

export default class DeckListWrap extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let tweets = [{name: 'Krunal'},{name: 'Krunal1'},{name: 'Krunal2'}];
		return (
			<div className="deck-wrap clearfix">
				 <DeckList tweets={tweets} />
				 <DeckList />
				 <DeckList />
			</div>
		)
	}
}