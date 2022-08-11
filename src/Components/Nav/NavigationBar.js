import "./NavStyle.css";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import { BrowserRouter as Router, Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import { ImHome } from "react-icons/im";
import {
	IoAddSharp,
	IoDocumentSharp,
	IoLogInSharp,
	IoPersonAdd,
	IoStarOutline,
	IoVideocam,
} from "react-icons/io5";

const Nav = (props) => {
	return (
		<div className="nav-container active">
			<ul className="nav">
				<NavItem icon={<IoAddSharp />} name="Add Movie">
					<DropdownMenu />
				</NavItem>

				<div className="line"></div>
				<Link to="/">
					<NavItem icon={<ImHome />} name="Home" />
				</Link>
				<Link to="/watchlist">
					<NavItem icon={<IoDocumentSharp />} name="Watch List" />
				</Link>
				<Link to="/watchingnow">
					<NavItem icon={<IoVideocam />} name="Watching Now" />
				</Link>
				<Link to="/recommendation">
					<NavItem icon={<IoStarOutline />} name="Recommendation" />
				</Link>
				<div className="line"></div>
				<Link to="/login">
					<NavItem icon={<IoLogInSharp />} name="Login" />
				</Link>
				<Link to="/signup">
					<NavItem icon={<IoPersonAdd />} name="Sign Up" />
				</Link>
			</ul>
		</div>
	);
};

export default Nav;
