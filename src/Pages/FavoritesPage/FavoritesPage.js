import { useState, useEffect, useCallback } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import WideCard from '../../Components/WideCard/WideCard';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const [list, setList] = useState([]);

    // Erstellen eines leeren Arrays, um die  mealstobjekte
    // aus dem localStorage darin zu verschieben

    //Erstellen einer Funktion, die die Liste der Lieblingsgerichte anzeigt
    const showFavoritesList = useCallback(() => {
        const favoritesList = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let retrievedObject = JSON.parse(localStorage.getItem(key));
            favoritesList.push(retrievedObject);
        }
        if (list.length === favoritesList.length) {
            return;
        } else {
            setList(favoritesList);
        }
    }, []);

    useEffect(() => {
        //Die Funktion wird ausgeführt,
        // nachdem die detailsPage-Komponente montiert wurde
        showFavoritesList();
    }, []);
    return (
        <>
            <section className="favorite-page">
                <h3>Favoriten</h3>
                {list &&
                    list.map((meal, index) => (
                        <WideCard
                            key={index}
                            meal={meal}
                            button={true}
                            onDelete={() => {
                                setList(
                                    list.filter(
                                        (mealItem) =>
                                            mealItem.idMeal !== meal.idMeal
                                    )
                                );
                            }}
                        />
                    ))}
                {list.length === 0 && (
                    <h2 className="no-items">No favorites to display </h2>
                )}
            </section>
            <NavBar />
        </>
    );
};

export default FavoritesPage;
