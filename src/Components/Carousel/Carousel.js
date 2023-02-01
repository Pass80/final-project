import React from 'react';
import './Carousel.css';
import Card from '../Card/Card';
import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Button from '../Button/Button';

const Carousel = ({
    data,
    button,
    card,
    type1,
    type2,
    selectedAreaHandler,
}) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
    const [currentMealsIndex, setCurrentMealsIndex] = useState(0);

    // Hier wird ein neues Array erstellt, das aus zwei Elementen besteht,
    // die im Karussell angezeigt werden
    const visibleCards = data?.slice(currentCardIndex, currentCardIndex + 2);
    // Hier wird ein neues Array aus 3 Elemente erstellt (für areas buttons)
    const visibleButtons = data?.slice(
        currentButtonIndex,
        currentButtonIndex + 3
    );
    // Hier wird ein neues Array aus 3 Elemente erstellt (für categories buttons)
    const visibleMealsSorts = data?.slice(
        currentMealsIndex,
        currentMealsIndex + 3
    );
    // Erstellen der Funktionen, die für die Änderung der angezeigten Elemente
    // im Karussell verantwortlich sind
    function handlePreviousClick() {
        setCurrentCardIndex(currentCardIndex - 2);
    }

    function handleNextClick() {
        setCurrentCardIndex(currentCardIndex + 2);
    }

    function handlePreviousClick1() {
        setCurrentButtonIndex(currentButtonIndex - 3);
    }

    function handleNextClick1() {
        setCurrentButtonIndex(currentButtonIndex + 3);
    }

    function handlePreviousClick2() {
        setCurrentMealsIndex(currentMealsIndex - 3);
    }

    function handleNextClick2() {
        setCurrentMealsIndex(currentMealsIndex + 3);
    }

    return (
        <>
            {/* {Hier wird der Inhalt des Karussells bedingt
             gerendert, entsprechend den Daten, die es erhält} */}
            {data && (
                <div className="carousel-container">
                    {card && (
                        <>
                            <div className="carousel-cards-container">
                                {visibleCards.map((card, index) => (
                                    <Card key={index} card={card} />
                                ))}
                            </div>

                            <button
                                className="previous-btn"
                                onClick={handlePreviousClick}
                                disabled={currentCardIndex === 0}
                            >
                                <GrFormPrevious />
                            </button>
                            <button
                                className="next-btn"
                                onClick={handleNextClick}
                                disabled={currentCardIndex >= data.length - 2}
                            >
                                <GrFormNext />
                            </button>
                        </>
                    )}
                    {button && type1 && (
                        <>
                            <div className="carousel-cards-container">
                                {visibleButtons?.map((element, index) => (
                                    <Button
                                        key={index}
                                        button={element}
                                        selectedAreaHandler={
                                            selectedAreaHandler
                                        }
                                    />
                                ))}
                            </div>

                            <button
                                className="previous-btn"
                                onClick={handlePreviousClick1}
                                disabled={currentButtonIndex === 0}
                            >
                                <GrFormPrevious />
                            </button>
                            <button
                                className="next-btn"
                                onClick={handleNextClick1}
                                disabled={currentButtonIndex >= data.length - 3}
                            >
                                <GrFormNext />
                            </button>
                        </>
                    )}
                    {button && type2 && (
                        <>
                            <div className="carousel-cards-container">
                                {visibleMealsSorts?.map((element, index) => (
                                    <Button key={index} button={element} />
                                ))}
                            </div>

                            <button
                                className="previous-btn"
                                onClick={handlePreviousClick2}
                                disabled={currentMealsIndex === 0}
                            >
                                <GrFormPrevious />
                            </button>
                            <button
                                className="next-btn"
                                onClick={handleNextClick2}
                                disabled={currentMealsIndex >= data.length - 3}
                            >
                                <GrFormNext />
                            </button>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Carousel;
