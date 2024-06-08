import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import SingleCharacterPage from "./views/SingleCharacterPage.jsx";
import SinglePlanetPage from "./views/SinglePlanetPage.jsx";
import SingleStarshipPage from "./views/SingleStarshipPage.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/singlecharacterpage/:idCharacter" element={<SingleCharacterPage />} />
						<Route path="/singleplanetpage/:idPlanet" element={<SinglePlanetPage />} />
						<Route path="/singlestarshippage/:idStar" element={<SingleStarshipPage />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
