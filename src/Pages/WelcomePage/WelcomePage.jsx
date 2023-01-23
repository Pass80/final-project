import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import screen from '../../Assets/Images/Screen.png';
import './WelcomePage.css';

const WelcomePage = () => {
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            if (location.pathname === '/') {
                window.location.href = '/start';
            }
        }, 1000);
    }, [location.pathname]);

    return (
        <div>
            <img className="welcome-img" src={screen} alt="welcome-page" />
        </div>
    );
};

export default WelcomePage;
