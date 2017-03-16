import React from 'react'

import DeckListWrap from '../components/deck/deck-list-wrap'

export default class Deck extends React.Component {
	render() {
		return (
			<div className="container deck-page">
				<div className="deck-wrap clearfix">
					<DeckListWrap />
				</div>
			</div>
		)
	}
}
