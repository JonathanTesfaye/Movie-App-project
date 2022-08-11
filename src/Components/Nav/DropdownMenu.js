import "./NavStyle.css";
import DropdownItem from "./DropdownItem";
import { Link } from "react-router-dom";
import { IoBody } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const DropdownMenu = () => {
	return (
		<div className="dropdown">
			<Link to="/addmovie">
				<DropdownItem leftIcon={<IoBody />}>
					<p className="p">Manual</p>
				</DropdownItem>
			</Link>
			<Link to="/search">
				<DropdownItem leftIcon={<IoSearch />}>
					<p className="p">Search</p>
				</DropdownItem>
			</Link>
		</div>
	);
};

export default DropdownMenu;
