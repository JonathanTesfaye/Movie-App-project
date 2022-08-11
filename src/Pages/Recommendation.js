import "./RecommendationStyle.css";
import Poster from "../Poster.jpg";
const Recommendation = () => {
	return (
		<div className="recommendation-container">
			<div className="Re-sub">
				{/* Start of card */}
				<div className="bg card">
					<div className="re-card-image">
						<img className="re-image" src={Poster} />
					</div>
					<div className="re-card-title">
						<h3 className=" re-card-name">
							That time i got reincarnated as a slime
						</h3>
					</div>
				</div>
				{/* End of card */}
				<div className="detail">
					<div className="bg B description">
						<h2>Description</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
					<div className="bg B rating">
						<h2>Rating</h2>
						<p>5</p>
					</div>
					<div className="bg B cast">
						<h2>Casts</h2>
						<div> </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recommendation;
