import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SavedList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="saved-list">
				<h3>Saved Movies:</h3>
				{this.props.list.map(movieObj => (
					<span className="saved-movie" key={movieObj.movie.id}>
						{movieObj.movie.title}
					</span>
				))}
				<div className="home-button">
					<Link to="/">Home</Link>
				</div>
			</div>
		);
	}
}
