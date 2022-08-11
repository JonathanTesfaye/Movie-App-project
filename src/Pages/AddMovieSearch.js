import "./AddMovieSearchStyle.css";
import { useState } from "react";

const Search = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const onChange = (input) => {
		input.preventDefault();

		setQuery(input.target.value);
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=flase&query${input.target.value}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (!data.errors) {
					setResults(data.results);
				} else {
					setResults([]);
				}
			});
	};

	return (
		<div className="search-container">
			<div className="search">
				<input
					type="text"
					placeholder="Search Movie"
					className="search-form"
					value={query}
					onChange={onChange}
				/>
				{results.length > 0 && (
					<ul className="results">
						{results.map((movie) => (
							<li>{movie.title}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Search;
