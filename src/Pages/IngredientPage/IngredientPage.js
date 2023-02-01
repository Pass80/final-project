import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SmallCard from '../../Components/SmallCard/SmallCard';
import './IngredientPage.css';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import NavBar from '../../Components/NavBar/NavBar';

const IngredientPage = () => {
    const [IngredientSearchResults, setIngredientSearchResults] =
        useState(null);
    return (
        <div className="ingredient_page">
            <div className="header-container ing">
                <Link className="back-arrow-link" to={'/main'}>
                    <HiArrowNarrowLeft className="back_arrow" />
                </Link>
                <h4 className="ingredient_heading">Search by Ingredient</h4>
            </div>
            <SearchBar
                setIngredientSearchResults={setIngredientSearchResults}
                ingSearch={true}
            />
            <div className="results-section">
                {IngredientSearchResults?.map((meal, index) => (
                    <SmallCard meal={meal} key={index} />
                ))}
            </div>
            <NavBar />
        </div>
    );
};

export default IngredientPage;
