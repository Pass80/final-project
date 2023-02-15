import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./CategoryPage.css";
import axios from "axios";
import { useEffect } from "react";
import SmallCard from "../../Components/SmallCard/SmallCard";
import Carousel from "../../Components/Carousel/Carousel";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { fetchAreas } from "../../Services/Services";
import { Link } from "react-router-dom";
import WideCard from "../../Components/WideCard/WideCard";
import SmallButton from "../../Components/SmallButton/SmallButton";
import DesktopNavBar from "../../Components/DesktopNavBar/DesktopNavBar";
import Button from "../../Components/Button/Button";

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
			<div className="mobile-header">
				<header>
					<div className="header-container">
						<Link className="back-arrow-link" to={"/main"}>
							<HiArrowNarrowLeft className="back_arrow" />
						</Link>
						<h2>Categories</h2>
					</div>
				</header>
				<SearchBar
					className="search-bar"
					setSearchResults={setSearchResults}
				/>
			</div>

			<div className="fixed-section">
				<header>
					<div className="header-container">
						<Link className="back-arrow-link" to={"/main"}>
							<HiArrowNarrowLeft className="back_arrow" />
						</Link>
						<h2>Categories</h2>
						<DesktopNavBar />
					</div>
				</header>
				<SearchBar
					className="search-bar"
					setSearchResults={setSearchResults}
				/>
				<div className="wide-screen">
					<div className="titles-heading">
						<h2>Areas</h2>
						<SmallButton />
					</div>
					<div className="buttons-container">
						{areas?.map((element) => {
							return (
								<Button button={element}>
									{element.strArea}
								</Button>
							);
						})}
					</div>
				</div>
			</div>
			<div className="display-section">
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
				{/* <div className="buttons-container"> */}
				{selectedCategory && !searchResults && (
					<section className="areas-section">
						<div className="title sm-btn">
							<h3>Areas</h3>
							<SmallButton />
						</div>
						<Carousel data={areas} button={true} type1={true} />
					</section>
				)}
				{/* </div> */}

				{/* Wenn der searchResults-Wert  null ist, 
             wird der Area Abschnitt gezeigt. */}
				{selectedCategory && !searchResults && (
					<section className="results-section">
						{selectedCategory?.map((meal, index) => (
							<SmallCard meal={meal} key={index} />
						))}
					</section>
				)}
			</div>
			<NavBar />
		</div>
	);
};

export default CategoryPage;
