import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './AreasPage.css';
import axios from 'axios';
import SmallCard from '../../Components/SmallCard/SmallCard';
import Carousel from '../../Components/Carousel/Carousel';
import { fetchMealSorts } from '../../Services/Services';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AreasPage = () => {
    const [selectedArea, setSelectedArea] = useState();
    const [mealSort, setMealSort] = useState();

    const params = useParams();

    const fetchSelectedArea = async () => {
        const { data } = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.id}`
        );
        return data.meals;
    };

    useEffect(() => {
        async function fetchData() {
            const sorts = await fetchMealSorts();
            setMealSort(sorts);

            const area = await fetchSelectedArea();
            setSelectedArea(area);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="category-page">
            <header>
                <div className="header-container">
                    <Link className="back-arrow-link" to={'/main'}>
                        <HiArrowNarrowLeft className="back_arrow" />
                    </Link>
                    <h1>Search</h1>
                </div>
            </header>
            <SearchBar />
            <section className="areas-section">
                <div className="title">
                    <h2>Categories</h2>
                    <h3>See All</h3>
                </div>
                <Carousel data={mealSort} button={true} type2={true} />
            </section>
            {selectedArea && (
                <section className="results-section">
                    {selectedArea?.map((meal, index) => (
                        <SmallCard meal={meal} key={index} />
                    ))}
                </section>
            )}
            <NavBar />
        </div>
    );
};

export default AreasPage;
