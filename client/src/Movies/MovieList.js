import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:5000/api/movies")
			.then(response => {
				this.setState(() => ({ movies: response.data }));
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}

	/*Make it so that the card in MovieList is a link, 
this should direct the user to the /movies/{id of movie here} URL, 
where :id is the id of the individual movie.*/

	render() {
		return (
			<div className="movie-list">
				{this.state.movies.map(movie => (
					<MovieDetails key={movie.id} movie={movie} />
				))}
			</div>
		);
	}
}

function MovieDetails({ movie }) {
	const { title, director, metascore, stars } = movie;
	return (
		<div className="movie-card">
			<h2>
				<Link to={`/movies/${movie.id}`}>{title}</Link>
			</h2>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>

			{stars.map(star => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))}
		</div>
	);
}
