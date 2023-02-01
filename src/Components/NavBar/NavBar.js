import { Link } from 'react-router-dom';
import './NavBar.css';

// Ist ja auch in der Figma Vorlage recht schlicht... sollte mit den paar Zeilen fast fertig sein... Ob wir die Icons behalten oder die aus der Vorlage nehmen, kann man ja schauen...

const NavBar = () => {
    return (
        <nav>
            <Link to="/main">
                {/* <i class="las la-home"></i> */}
                <svg
                    className="home-btn"
                    width="76"
                    height="49"
                    viewBox="0 0 76 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M35.1572 33.7714L35.138 31.5618C35.138 30.7818 35.7739 30.148 36.5618 30.1428H39.4478C40.2395 30.1428 40.8813 30.7781 40.8813 31.5618L40.9005 33.7809C40.9003 34.4432 41.4343 34.9845 42.103 35H44.0271C45.9451 35 47.5 33.4607 47.5 31.5618V22.8378C47.4898 22.0908 47.1355 21.3893 46.538 20.933L39.9577 15.6853C38.8049 14.7716 37.1662 14.7716 36.0134 15.6853L29.462 20.9426C28.8623 21.397 28.5074 22.0997 28.5 22.8474V31.5618C28.5 33.4607 30.0549 35 31.9729 35H33.897C34.5824 35 35.138 34.4499 35.138 33.7714"
                        stroke="#97A2B0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className="pathWhite"
                        d="M35.0905 26.8896H40.9097"
                        stroke="#97A2B0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
            <Link to="/search">
                {/* <i class="las la-search"></i> */}
                <svg
                    className="discover-btn"
                    width="76"
                    height="49"
                    viewBox="0 0 76 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="37.7666"
                        cy="23.7664"
                        r="8.98856"
                        stroke="#97A2B0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M44.0183 30.4849L47.5423 33.9997"
                        stroke="#97A2B0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
            <Link to="/favoriten">
                {/* <i class="lar la-heart"></i> */}
                <svg
                    className="favorites-btn"
                    width="76"
                    height="49"
                    viewBox="0 0 76 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.3719 23.5983C28.2989 20.2483 29.5529 16.4193 33.0699 15.2863C34.9199 14.6893 36.9619 15.0413 38.4999 16.1983C39.9549 15.0733 42.0719 14.6933 43.9199 15.2863C47.4369 16.4193 48.6989 20.2483 47.6269 23.5983C45.9569 28.9083 38.4999 32.9983 38.4999 32.9983C38.4999 32.9983 31.0979 28.9703 29.3719 23.5983Z"
                        stroke="#97A2B0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className="pathWhite"
                        d="M42.5 18.7002C43.57 19.0462 44.326 20.0012 44.417 21.1222"
                        stroke="#97A2B0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
            <Link to="/profil">
                {/* <i class="las la-user"></i> */}
                <svg
                    className="profile-btn"
                    width="76"
                    height="49"
                    viewBox="0 0 76 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.8479 27.3462C33.9803 27.3462 30.6774 27.931 30.6774 30.2729C30.6774 32.6148 33.9593 33.2205 37.8479 33.2205C41.7155 33.2205 45.0174 32.6348 45.0174 30.2938C45.0174 27.9529 41.7365 27.3462 37.8479 27.3462Z"
                        stroke="#97A2B0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.8479 24.0059C40.386 24.0059 42.4432 21.9478 42.4432 19.4097C42.4432 16.8716 40.386 14.8145 37.8479 14.8145C35.3098 14.8145 33.2517 16.8716 33.2517 19.4097C33.2432 21.9392 35.287 23.9973 37.8155 24.0059H37.8479Z"
                        stroke="#97A2B0"
                        strokeWidth="1.42857"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
        </nav>
    );
};

export default NavBar;
