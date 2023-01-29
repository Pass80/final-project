import NavBar from '../../Components/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import './DetailsPage.css';

const DetailsPage = () => {
    const [meal, setMeal] = useState();
    const [measures, setMeasures] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [selected, setSelected] = useState(true);

    const ingredientsRef = useRef(null);
    const instructionsRef = useRef(null);

    //Erstellen einer Funktion, die den Abschnitt "Ingredients"
    //anzeigt und den Abschnitt "Instructions" ausblendet
    const handelIngredientsBtn = () => {
        setSelected(true);
        ingredientsRef.current.style.display = 'block';
        instructionsRef.current.style.display = 'none';
    };
    // Erstellen einer Funktion, die das Gegenteil der oben genannten Funktion macht
    const handelInstructionsBtn = () => {
        setSelected(false);
        ingredientsRef.current.style.display = 'none';
        instructionsRef.current.style.display = 'block';
    };

    const params = useParams();
    // Speichern der meal-id, die vom Params Objekt erhaltet wird, in einer Variablen
    const mealId = params.id;

    //Erstellen einer Funktion, die die keys speichert,
    // die keine empty string oder Null werte in den oben genannten Arrays haben
    const filterMealObject = (obj) => {
        //Erstellen von zwei Arrays zum Speichern der measures  und ingredients keys,
        // die von dem meal objekt erhalten werden
        const measures = [];
        const ingredients = [];
        for (let key in obj) {
            if (
                key.startsWith('strIngredient') &&
                obj[key] &&
                obj[key] !== ' '
            ) {
                ingredients.push(obj[key]);
            }
            if (key.startsWith('strMeasure') && obj[key] && obj[key] !== ' ') {
                measures.push(obj[key]);
            }
        }
        setIngredients(ingredients);
        setMeasures(measures);
    };

    const fetchMealById = useCallback(() => {
        //Erstellen einer Funktion, die die meal daten gemäß der mealId  abruft
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then((response) => response.json())
            .then((data) => {
                const selectedMeal = data.meals[0];
                filterMealObject(selectedMeal);
                setMeal(selectedMeal);
            });
    }, [mealId, measures, ingredients]);

    // Erstellen einer Funktion,dass das meal im localStorage  Speichert ,
    // um es später in der Favoritenliste anzuzeigen
    const addToFavorites = () => {
        //Speichern des  meal objekts im localStorage durch Setzen
        //das key auf den meal-id Wert
        localStorage.setItem(`${meal.idMeal}`, JSON.stringify(meal));
    };

    useEffect(() => {
        fetchMealById();
    }, [params.id]);

    return (
        <>
            {meal && (
                <section>
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="MealBackground"
                    />
                    <section className="MealSlider">
                        <div className="heading-title">
                            <h2>{meal.strMeal}</h2>
                            <button
                                className="favorite-btn"
                                onClick={addToFavorites}
                            >
                                Add to favorites
                            </button>
                        </div>

                        <section className="FoodType">
                            <h3>{meal.strCategory}</h3>
                            <h4>{meal.strArea}</h4>
                        </section>
                        {/* Hier könntest evtl mit RadioButtons arbeiten... Lassen sich einfacher togglen. quasi: if (checked) dann anzeigen sonst hide/none.. */}
                        <div className="ToggleButtons">
                            <button
                                // className="ingredientsBtn selected"
                                className={`${
                                    selected ? 'selected' : 'unselected'
                                }`}
                                onClick={handelIngredientsBtn}
                            >
                                Ingredients
                            </button>
                            <button
                                // className="instructionsBtn"
                                className={`${
                                    selected ? 'unselected' : 'selected'
                                } instructionsBtn`}
                                onClick={handelInstructionsBtn}
                            >
                                Instructions
                            </button>
                        </div>
                        <section
                            className="ingredientsPage"
                            ref={ingredientsRef}
                        >
                            <h2>Ingredients</h2>

                            <section className="Ingredients">
                                {meal && (
                                    <>
                                        {measures.map((measure, index) => (
                                            <div className="ingredient-container">
                                                <div className="ingredient-title">
                                                    <span>{measure}</span>
                                                    <p key={index}>
                                                        {ingredients[index]}
                                                    </p>
                                                </div>

                                                <img
                                                    src={`https://www.themealdb.com/images/ingredients/${ingredients[index]}-Small.png`}
                                                    alt={`${ingredients[index]}`}
                                                />
                                            </div>
                                        ))}
                                    </>
                                )}
                            </section>
                        </section>

                        <section
                            className="instructionsPage"
                            ref={instructionsRef}
                        >
                            <h2>Instructions</h2>
                            <section className="Instructions">
                                <article className="InstructionText">
                                    {meal.strInstructions.replaceAll(
                                        '.',
                                        '.\n\n'
                                    )}
                                </article>
                                <a
                                    href={meal.strYoutube}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="VideoButton"
                                >
                                    Video
                                </a>
                            </section>
                        </section>
                    </section>
                </section>
            )}
            <NavBar />
        </>
    );
};

export default DetailsPage;
