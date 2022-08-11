import "./NavStyle.css";

const DropdownItem = (props) => {
	return (
		<a href="#" className="menu-Item">
			<span className="dropdown-button">
				<div className="icon">{props.leftIcon}</div>
			</span>
			{props.children}
			<span className="icon-right">{props.rightIcon}</span>
		</a>
	);
};
export default DropdownItem;
