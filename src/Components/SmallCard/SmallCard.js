import React from "react";
import { Link } from "react-router-dom";
import "./SmallCard.css";

const SmallCard = ({ meal }) => {
	let mealString;
	let mealSubstring = meal.strMeal.substring(0, 10);

	if (mealSubstring.length >= 10) {
		mealString = mealSubstring + "...";
	} else {
		mealString = meal.strMeal
	}
	return (
		<Link className="small-card-link" to={`/details/${meal.idMeal}`}>
			<div className="small-card" key={meal.idMeal}>
				<div>
					<img src={meal.strMealThumb} alt={meal.strMeal} />
				</div>
				{/* hier wird der Titel nur aus 10 Buchstaben angezeigt,
                 um ein overflow zu vermeiden  */}
				<h2>{mealString}</h2>
			</div>
		</Link>
	);
};

export default SmallCard;
