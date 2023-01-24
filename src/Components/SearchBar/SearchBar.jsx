// import "./SearchBar.css"

// const SearchBar = () => {
// 	return (
// 		<section className="searchBar">

// 			<label>
// 				<input type="text" placeholder="Suchen" />
// 			</label>
// 		</section>
// 	);
// };

// export default SearchBar;

import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchResults }) => {
    const [searchQuery, setSearchQuery] = useState();

    const searchMeal = (searchWord) => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`
        )
            .then((response) => response.json())
            .then((data) => {
                const meals = data.meals;
                setSearchResults(meals);
                console.log(meals);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="search-bar">
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        searchMeal(searchQuery);
                    }}
                />
                <svg
                    className="search-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        searchMeal(searchQuery);
                    }}
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
