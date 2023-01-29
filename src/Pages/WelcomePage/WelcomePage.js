import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            if (location.pathname === '/') {
                navigate('/start');
            }
        }, 1500);
    }, [location.pathname, navigate]);

    /* Hier würde ich, wenn Zeit bleibt, noch eine "Ladeanimation" bauen... und dann die Timeoutzeit auf circa 2-3 Sek stellen */
    return (
        <div className="welcomePage">
            {/* Linien */}
            <svg
                className="welcomeLinie linie001"
                width="675"
                height="220"
                viewBox="0 0 375 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M502.637 -110.177C490.218 -106.724 463.389 -85.817 455.423 -29.8112C445.465 40.1962 423.691 183.806 334.473 151.38C245.255 118.955 193.497 60.3343 220.541 34.452C247.585 8.56976 305.262 64.5545 241.8 141.082C178.338 217.609 42.2009 207.63 -13.9634 104.603"
                    stroke="#3DA0A7"
                />
            </svg>
            <svg
                className="welcomeLinie linie002"
                width="575"
                height="651"
                viewBox="0 0 375 351"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M517 350.746C531.081 309.021 533.714 216.325 478.812 179.03C423.909 141.734 364.701 142.451 290 179.03C214.5 216 119.5 209 139 141.246C165.56 48.9593 177.5 12.7456 111 35.2456C44.5 57.7456 73.4765 -2.37118 -1 7.74561C-60.5812 15.839 -121 104.746 -172 0.745605"
                    stroke="#3DA0A7"
                />
            </svg>
            <svg
                className="welcomeLinie linie003"
                width="205"
                height="71"
                viewBox="0 0 205 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M65.2707 167.711C123.657 108.163 189.952 152.352 202.781 87.6442C214.527 28.3997 125.469 -32.8686 74.5309 24.2655C38.0263 65.2106 -14.4049 126.257 5.65634 160.68"
                    stroke="#3DA0A7"
                    strokeLinecap="round"
                />
            </svg>
            <svg
                className="welcomeLinie linie004"
                width="186"
                height="99"
                viewBox="0 0 186 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M114.922 -79.5327C72.9515 -7.46804 -2.16703 -34.018 1.29143 31.8583C4.45791 92.1728 105.837 129.688 141.181 61.7922C166.509 13.1347 202.339 -58.9208 174.436 -87.3613"
                    stroke="#3DA0A7"
                    strokeLinecap="round"
                />
            </svg>

            <div className="logo">
                {/* <img src={logo} alt="logo" /> */}
                <Link to="/start">
                    <svg
                        width="27"
                        height="17"
                        viewBox="0 0 27 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.30005 15.1985C3.76876 14.7739 1.83997 12.5724 1.83997 9.92045C1.83997 6.96457 4.23618 4.56836 7.19206 4.56836C7.55934 4.56836 7.91797 4.60535 8.26444 4.67582"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M20.7527 15.1985C23.284 14.7739 25.2128 12.5724 25.2128 9.92045C25.2128 6.96457 22.8166 4.56836 19.8607 4.56836C19.4934 4.56836 19.1348 4.60535 18.7883 4.67582"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M8.25272 7.69012C8.14265 7.26246 8.08411 6.81411 8.08411 6.35209C8.08411 3.39621 10.4803 1 13.4362 1C16.3921 1 18.7883 3.39621 18.7883 6.35209C18.7883 6.81411 18.7298 7.26246 18.6197 7.69012"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M13.4011 10.6719V13.4748"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M8.44441 10.9072C8.22034 11.4077 8.63112 13.3158 9.1166 13.6286"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M18.7255 10.9072C18.9496 11.4077 18.5388 13.3158 18.0533 13.6286"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </Link>

                <h1>Tasty</h1>
            </div>
            {/*       <img className="welcome-img" src={screen} alt="welcome-page" /> */}
        </div>
    );
};

export default WelcomePage;
