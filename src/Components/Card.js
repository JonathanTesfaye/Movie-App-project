import "./CardStyle.css";
import Poster from "../Poster.jpg";

const Card = () => {
	return (
		<div className="bg Card-container">
			<div className="card-image">
				<img className="image" src={Poster} />
			</div>
			<div className="card-title">
				<h3 className=" card-name">That time i got reincarnated as a slime</h3>
			</div>
		</div>
	);
};

export default Card;
