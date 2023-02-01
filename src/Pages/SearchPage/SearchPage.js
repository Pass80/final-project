import './SearchPage.css';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
// Hatte hier überlegt, ob man das wieder mit Routes machen muss...
import { Link } from 'react-router-dom';
import { useState } from 'react';
import WideCard from '../../Components/WideCard/WideCard';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState(null);

    return (
        <section className="search-page ">
            <div className="searchHeader">
                <div className="header-container searching">
                    <Link className="back-arrow-link" to={'/main'}>
                        <HiArrowNarrowLeft className="back_arrow" />
                    </Link>
                    <h1>Search</h1>
                </div>
            </div>
            {/* Hier wird die setSearchResults-Funktion als Props 
            an die Suchleistenkomponente übergeben, sodass der State
             von der Suchleistenkomponente aktualisiert werden kann */}
            <SearchBar
                setSearchResults={setSearchResults}
                searchResults={searchResults}
            />
            <section className="search-results">
                {/* Wenn der searchResults-Wert nicht null ist, werden die Karten 
            mit den Suchergebnissen gezeigt. */}
                {searchResults &&
                    searchResults.map((meal) => (
                        <WideCard key={meal.idMeal} meal={meal} />
                    ))}
            </section>
            <NavBar />
        </section>
    );
};

export default SearchPage;
