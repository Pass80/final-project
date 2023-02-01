import React, { useRef } from 'react';
import './SearchBar.css';

const SearchBar = ({
    setSearchResults,
    setIngredientSearchResults,
    ingSearch,
}) => {
    const timerRef = useRef(null);
    const inputRef = useRef();

    // Erstellen der Suchfunktion
    const searchMeal = (searchWord) => {
        // hier wird die alte setTimeout-Funktion aufgeräumt

        clearTimeout(timerRef.current);

        // Eine setTimeout-Funktion wird hinzugefügt, um die Anfrage nach 1 Sekunde zu senden,
        // um zu verhindern, dass bei jedem Tastendruck eine Anfrage gesendet wird

        timerRef.current = setTimeout(() => {
            if (!ingSearch) {
                if (searchWord === '') {
                    setSearchResults(null);
                    return;
                }
                fetch(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`
                )
                    .then((response) => response.json())
                    .then((data) => {
                        const meals = data.meals;
                        setSearchResults(meals);
                    });
            }
            if (ingSearch) {
                if (searchWord === '') {
                    setIngredientSearchResults(null);
                    return;
                }
                fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchWord}`
                )
                    .then((response) => response.json())
                    .then((data) => {
                        const meals = data.meals;
                        setIngredientSearchResults(meals);
                    });
            }
        }, 500);
    };

    return (
        <div className="search-bar">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search"
                    onChange={(e) => {
                        searchMeal(e.target.value);
                    }}
                />
                <svg
                    onClick={(e) => searchMeal(inputRef.current.value)}
                    className="search-btn"
                    width="76"
                    height="49"
                    viewBox="0 0 76 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="37.7666"
                        cy="23.7664"
                        r="8.98856"
                        stroke="#0A2533"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M44.0183 30.4849L47.5423 33.9997"
                        stroke="#0A2533"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </form>
        </div>
    );
};

export default SearchBar;
