import React from 'react';
import { Link } from 'react-router-dom';
import './SmallButton.css';

const SmallButton = () => {
    return (
        <Link className="btn-link" to="/ingredient">
            <div className="small-btn">Search by Ingredient</div>
        </Link>
    );
};

export default SmallButton;
