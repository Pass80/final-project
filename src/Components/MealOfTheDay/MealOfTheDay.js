/* import "./MealOfTheDay.css"; */
import './Mealy2.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Inhalte stehen, beim Design habe ich erst nur schnell was hingebaut, weil ich nicht gut an die Vorlage kam...

// Muss noch verlinkt werden zur Detailseite mit entsprechendem Inhalt (Anhand idMeal)

const MealOfTheDay = () => {
    let [randomMeal, setRandomMeal] = useState([]);

    let url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRandomMeal(data.meals[0]);
            });
    }, [url]);

    return (
        <Link className="mealOfDayLink" to={`/details/${randomMeal.idMeal}`}>
            <article className="mealOfDay">
                <div className="mealOfDayCircle"></div>

                <svg
                    width="219"
                    height="124"
                    viewBox="0 0 219 124"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-135.685 16.3535C-127.738 14.2568 -106.27 17.2374 -83.9709 45.9344C-56.0972 81.8055 1.82334 154.954 40.6136 107.926C79.404 60.898 89.177 11.3826 65.9991 5.69321C42.8212 0.00382569 28.9438 49.9659 88.3833 72.1362C147.823 94.3065 219.644 44.6073 217.644 -31.1374"
                        stroke="#3DA0A7"
                    />
                </svg>
                <svg
                    width="53"
                    height="49"
                    viewBox="0 0 53 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M64.9713 42.5124C68.0097 70.9068 41.3855 78.9015 28.505 72.4792C-17.5412 48.8858 2.84503 37.3846 22.6101 11.0039C42.3752 -15.3768 61.9328 14.118 64.9713 42.5124Z"
                        stroke="#3DA0A7"
                    />
                </svg>
                <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse
                        cx="4.19319"
                        cy="4.15717"
                        rx="4.01515"
                        ry="4.06977"
                        fill="#FFF1CE"
                    />
                </svg>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.4057 10.2497C6.64321 14.0634 0.323046 13.8404 0.323046 13.8404C0.323046 13.8404 0.103103 7.4343 3.86561 3.62062C7.62811 -0.193066 13.9483 0.0298696 13.9483 0.0298696C13.9483 0.0298696 14.1682 6.43601 10.4057 10.2497Z"
                        fill="#FFF1CE"
                    />
                </svg>
                <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.63735 10.1211C7.78959 9.85125 7.81017 9.52666 7.6931 9.24138L4.23636 0.817655C3.92034 0.0475296 2.8602 -0.0133968 2.4492 0.714948L0.92944 3.40818C0.777193 3.67798 0.756622 4.00257 0.873688 4.28785L4.33042 12.7116C4.64645 13.4817 5.70659 13.5426 6.11758 12.8143L7.63735 10.1211Z"
                        fill="#FFF1CE"
                    />
                </svg>

                <div
                    className="mealOfDayImg"
                    style={{
                        backgroundImage: `url(${randomMeal.strMealThumb})`,
                    }}
                ></div>
                <h5>{randomMeal.strMeal}</h5>
                <div>
                    <p>{randomMeal.strCategory}</p>
                    <p>{randomMeal.strArea}</p>
                </div>
            </article>
        </Link>
    );
};

export default MealOfTheDay;
