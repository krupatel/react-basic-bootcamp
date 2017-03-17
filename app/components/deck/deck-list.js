import React from 'react'
import TweetItem from "./tweet-item"

export default class DeckListItem extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="deck-list">
				<div className="deck-title">
					Handle 1
				</div>
				<div className="deck-body">
					{
						this.props.tweets ? this.props.tweets.map((tweet) => {
							return <TweetItem name={tweet.name} />
						}) : <div>No tweets</div>
					}
				</div>
			</div>
		)
	}
}