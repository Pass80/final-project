import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './CategoryPage.css';
import axios from 'axios';
import { useEffect } from 'react';
import SmallCard from '../../Components/SmallCard/SmallCard';
import Carousel from '../../Components/Carousel/Carousel';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { fetchAreas } from '../../Services/Services';
import { Link } from 'react-router-dom';
import WideCard from '../../Components/WideCard/WideCard';

const CategoryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState();
    // const [mealSort, setMealSort] = useState();
    const [areas, setAreas] = useState();
    const [searchResults, setSearchResults] = useState(null);

    const params = useParams();

    // Diese Funktion sendet eine Anfrage und gibt ein Array von Objekten zurück,
    // die zur selben Mealkategorie gehören
    const fetchSelectedCategory = async (name) => {
        const { data } = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );
        setSelectedCategory(data.meals);
    };

    useEffect(() => {
        async function fetchData() {
            const areas = await fetchAreas();
            setAreas(areas);

            // const sorts = await fetchMealSorts();
            // setMealSort(sorts);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchSelectedCategory(params.id);
    }, [params.id]);

    return (
        <div className="category-page">
            <header>
                <div className="header-container">
                    <Link className="back-arrow-link" to={'/main'}>
                        <HiArrowNarrowLeft className="back_arrow" />
                    </Link>
                    {/* <h2>Search</h2> */}
                </div>
                <SearchBar setSearchResults={setSearchResults} />
            </header>

            {searchResults && (
                <section className="search-results">
                    {/* Wenn der searchResults-Wert nicht null ist, werden die Karten 
                     mit den Suchergebnissen gezeigt. */}
                    {searchResults &&
                        searchResults.map((meal) => (
                            <WideCard key={meal.idMeal} meal={meal} />
                        ))}
                </section>
            )}
            {/* Wenn der searchResults-Wert  null ist, 
             wird der Area Abschnitt gezeigt. */}
            {selectedCategory && !searchResults && (
                <section className="areas-section">
                    <div className="title">
                        <h3>Areas</h3>
                        <p className="seeAll">See All</p>
                    </div>
                    <Carousel data={areas} button={true} type1={true} />
                </section>
            )}
            {/* Wenn der searchResults-Wert  null ist, 
             wird der Area Abschnitt gezeigt. */}
            {selectedCategory && !searchResults && (
                <section className="results-section">
                    {selectedCategory?.map((meal, index) => (
                        <SmallCard meal={meal} key={index} />
                    ))}
                </section>
            )}
            <NavBar />
        </div>
    );
};

export default CategoryPage;
