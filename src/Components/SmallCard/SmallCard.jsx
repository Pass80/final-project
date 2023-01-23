import React from 'react';
import { Link } from 'react-router-dom';
import './SmallCard.css';

const SmallCard = ({ meal }) => {
    return (
        <div className="small-card" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal.substring(0, 10) + '...'}</h2>
        </div>
    );
};

export default SmallCard;
