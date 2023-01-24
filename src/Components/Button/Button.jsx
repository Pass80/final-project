import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ button }) => {
    return (
        <>
            {/* Dies wird das Komponente bedingt gemäß den Daten, die es erhält,
            rendern. Entweder areas Buttons wird gezeigt oder Categories buttons */}
            {button.strArea && (
                <Link className="btn-link" to={`/area/${button.strArea}`}>
                    <div className="element-btn">{button.strArea}</div>
                </Link>
            )}
            {button.strCategory && (
                <Link
                    className="btn-link"
                    to={`/category/${button.strCategory}`}
                >
                    <div className="element-btn">{button.strCategory}</div>
                </Link>
            )}
        </>
    );
};

export default Button;
