import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import mainMeal from '../../Assets/Images/Card.png';
import Carousel from '../../Components/Carousel/Carousel';
import { useState, useEffect } from 'react';
import { fetchAreas, fetchCategories } from '../../Services/Services';
import './MainPage.css';

const Main = () => {
    const [categories, setCategories] = useState();
    const [areas, setAreas] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const areas = await fetchAreas();
                setAreas(areas);
                const categories = await fetchCategories();
                setCategories(categories);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="main-page">
            <SearchBar />
            <main>
                <section className="main-meal">
                    <h1>Meal of the Day</h1>
                    <img src={mainMeal} alt="main-meal" />
                </section>
                <section className="areas-section">
                    <div className="title">
                        <h2>Areas</h2>
                        <h3>See All</h3>
                    </div>
                    <Carousel data={areas} button={true} type1={true} />
                </section>
                <section className="areas-section">
                    <div className="title">
                        <h2>Categories</h2>
                        <h3>See All</h3>
                    </div>
                    <Carousel data={categories} card={true} />
                </section>
            </main>
            <NavBar />
        </div>
    );
};

export default Main;
