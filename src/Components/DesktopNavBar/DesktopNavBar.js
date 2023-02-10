import React from "react";
import { Link } from "react-router-dom";
import "./DesktopNavBar.css";

const DesktopNavBar = () => {
	return (
		<div className="desktop-nav">
			<ul>
				<Link className="desktop-links" to="/main">
					<li>Home</li>
				</Link>
				<Link className="desktop-links" to="/search">
					<li>Search</li>
				</Link>
				<Link className="desktop-links" to="/favoriten">
					<li>Favorites</li>
				</Link>
				<Link className="desktop-links" to="/profil">
					<li>Account</li>
				</Link>
			</ul>
		</div>
	);
};

export default DesktopNavBar;
