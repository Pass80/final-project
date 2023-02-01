import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './IngredientDescriptionPage.css';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import NavBar from '../../Components/NavBar/NavBar';

const IngredientDescriptionPage = () => {
    const [ingredient, setIngredient] = useState();
    const params = useParams();
    const navigate = useNavigate();

    const getIngredientData = (ingredientObj) => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then((response) => response.json())
            .then((data) => {
                const ingredientsList = data.meals;
                const ingredientData = ingredientsList.find(
                    (ingredientItem) =>
                        ingredientItem.strIngredient.toLowerCase() ===
                        ingredientObj.toLowerCase()
                );

                setIngredient(ingredientData);
            });
    };

    useEffect(() => {
        getIngredientData(params.id);
        // eslint-disable-next-line
    }, [params.id]);

    return (
        <>
            {ingredient && (
                <div className="in-container">
                    <Link
                        className="back-arrow-link2"
                        to="#"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <HiArrowNarrowLeft className="back_arrow" />
                    </Link>
                    <img
                        src={`https://www.themealdb.com/images/ingredients/${params.id}.png`}
                        alt={params.id}
                    />
                    {ingredient.strDescription ? (
                        <div className="description-article">
                            {ingredient.strDescription}
                        </div>
                    ) : (
                        <h2 className="no-description">No Description</h2>
                    )}
                    <NavBar />
                </div>
            )}
        </>
    );
};

export default IngredientDescriptionPage;
