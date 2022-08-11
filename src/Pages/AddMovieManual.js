import "./AddMovieStyle.css";

const AddMovies = () => {
	return (
		<div className="container">
			<div className="form">
				<div className="poster-holder">
					<input type="file" className="poster" />
				</div>
				<div className="title-holder">
					<input type="text" placeholder="Title" className="form-title" />
				</div>
			</div>
			<button className="btn save">Save</button>
			<button className="btn cancel">Cancel</button>
		</div>
	);
};

export default AddMovies;
