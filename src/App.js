import './App.css';
import StartPage from './Pages/StartPage/StartPage';
import MainPage from './Pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import AreasPage from './Pages/AreasPage/AreasPage';
import SearchPage from './Pages/SearchPage/SearchPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WelcomePage />}></Route>
                    <Route path="/start" element={<StartPage />}></Route>
                    <Route path="/main" element={<MainPage />}></Route>
                    <Route
                        path="/category/:id"
                        element={<CategoryPage />}
                    ></Route>
                    <Route path="/area/:id" element={<AreasPage />}></Route>
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
