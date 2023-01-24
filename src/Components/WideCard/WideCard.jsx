import React from 'react';
import './WideCard.css';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const WideCard = ({ meal }) => {
    return (
        <div className="wide-card">
            <div className="image-container1">
                <img src={meal.strMealThumb} />
            </div>
            <div className="meal-infos">
                <h2>{meal.strMeal}</h2>
                <div className="category-name">
                    <div className="blue-point"></div>
                    <span>{meal.strCategory}</span>
                </div>
            </div>
            <Link className="details-arrow-link" to={`details/${meal.idMeal}`}>
                <BsFillArrowRightSquareFill className="details-arrow" />
            </Link>
        </div>
    );
};

export default WideCard;
