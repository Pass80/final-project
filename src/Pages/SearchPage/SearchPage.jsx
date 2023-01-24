import './SearchPage.css';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
// Hatte hier überlegt, ob man das wieder mit Routes machen muss...
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import WideCard from '../../Components/WideCard/WideCard';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const SearchPage = () => {
    const [searchResult, setSearchResults] = useState();

    return (
        <section className="search-page">
            <div className="searchHeader">
                <div className="header-container">
                    <Link className="back-arrow-link" to={'/main'}>
                        <HiArrowNarrowLeft className="back_arrow" />
                    </Link>
                    <h1>Suchen</h1>
                </div>
            </div>
            <SearchBar setSearchResults={setSearchResults} />
            <section className="search-results">
                {searchResult &&
                    searchResult.map((meal) => (
                        <WideCard key={meal.idMeal} meal={meal} />
                    ))}
            </section>
            <NavBar />
        </section>
    );
};

export default SearchPage;
