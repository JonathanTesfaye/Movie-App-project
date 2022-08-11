import { useState } from "react";
import "./NavStyle.css";

const NavItem = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<li className="nav-item" onClick={() => setOpen(!open)}>
			<a href="#" className="item-button">
				<div className="icon">{props.icon}</div>
			</a>
			<span className="item-name">{props.name}</span>
			{open && props.children}
		</li>
	);
};

export default NavItem;
