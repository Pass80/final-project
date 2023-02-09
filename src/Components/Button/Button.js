import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ button }) => {
	return (
		<>
			{/* Dies wird das Komponente bedingt gemäß den Daten, die es erhält,
            rendern. Entweder areas Buttons wird gezeigt oder Categories buttons */}
			{button.strArea && (
				<button className="element-btn">
					<Link className="btn-link" to={`/area/${button.strArea}`}>
						{button.strArea}
					</Link>
				</button>
			)}
			{button.strCategory && (
				<button className="element-btn">
					<Link
						className="btn-link"
						to={`/category/${button.strCategory}`}
					>
						{button.strCategory}
					</Link>
				</button>
			)}
		</>
	);
};

export default Button;
