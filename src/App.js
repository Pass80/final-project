import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AreasPage from "./Pages/AreasPage/AreasPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import ProfilPage from "./Pages/ProfilPage/ProfilPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import StartPage from "./Pages/StartPage/StartPage";
import MainPage from "./Pages/MainPage/MainPage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import IngredientPage from "./Pages/IngredientPage/IngredientPage";
import IngredientDescriptionPage from "./Pages/IngredientDescriptionPage/IngredientDescriptionPage";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<WelcomePage />}></Route>
					<Route path="/start" element={<StartPage />} />
					<Route path="/main" element={<MainPage />}></Route>
					<Route path="/area/:id" element={<AreasPage />}></Route>
					<Route
						path="/category/:id"
						element={<CategoryPage />}
					></Route>
					<Route path="/ingredient" element={<IngredientPage />} />
					<Route
						path="/description/:id"
						element={<IngredientDescriptionPage />}
					/>
					<Route path="/search" element={<SearchPage />} />
					<Route path="/details/:id" element={<DetailsPage />} />
					<Route path="/favoriten" element={<FavoritesPage />} />
					<Route path="/profil" element={<ProfilPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
