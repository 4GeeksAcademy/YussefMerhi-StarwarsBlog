import React from "react";
import "../../styles/home.css";
import CardCharacters from "../component/CardCharacters.jsx";
import CardPlanets from "../component/CardPlanets.jsx";
import CardStarships from "../component/CardStarships.jsx";

export const Home = () => (
	<div className="container">
		<h1 className="text-danger">Characters</h1>
		<div className="text-center  d-flex gap-4" style={{ overflowX: "auto" }}>
			<CardCharacters />
		</div>
		<h1 className="py-5 text-danger">Planets</h1>
		<div className="text-center  d-flex gap-4" style={{ overflowX: "auto" }}>
			<CardPlanets />
		</div>
		<h1 className="py-5 text-danger">Starships</h1>
		<div className="text-center d-flex gap-4" style={{ overflowX: "auto" }}>
			<CardStarships />
		</div>
	</div>
);
