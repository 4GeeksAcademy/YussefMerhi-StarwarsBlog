const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			starships: [],
			planets: [],
			species: [],
			vehicles: [],
			films: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(response => response.json())
				.then(data => {
					setStore({ characters: data.results});
				});
			},
			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships/")
				.then(response => response.json())
				.then(data => {
					setStore({ starships: data.results });
				});
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then(data => {
					setStore({ planets: data.results });
				});
			},
			getSpecies: () => {
				fetch("https://www.swapi.tech/api/species/")
				.then(response => response.json())
				.then(data => {
					setStore({ species: data.results });
				});
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(response => response.json())
				.then(data => {
					setStore({ vehicles: data.results });
				});
			},
			getFilms: () => {
				fetch("https://www.swapi.tech/api/films/")
				.then(response => response.json())
				.then(data => {
					setStore({ films: data.results });
				});
			},
			getUID: (category) => {
				return getStore()[category].map(element => { 
					 let urlArr = element.url?.split("/");
					 return urlArr[urlArr.length - 2];
					});
			},
			selectCategory: (uidToAnalyze) => {
				let categorySelected = ""
				switch(uidToAnalyze[0]) {
					case "c":
						categorySelected = "characters"
						break
					case "s":
						categorySelected = "starships"
						break  
					case "p":
						categorySelected = "planets"
						break    
					case "e":
						categorySelected = "species"
						break
					case "v":
						categorySelected = "vehicles"
						break    
					case "f":
						categorySelected = "films"
						break    
				}
				return categorySelected
			},
			addFavorite: (nameToAdd, uidToAdd) => {
				const updatedFavorites =  [...getStore().favorites, {title: nameToAdd, uid: uidToAdd }]
				setStore({ favorites: updatedFavorites });
			},
			removeFavorite: (uidToRemove) => {
				const updatedFavorites = getStore().favorites.filter((favorite) => {
					return !(favorite.uid === uidToRemove);
				});
				setStore({ favorites: updatedFavorites });
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				getActions().getCharacters()
				getActions().getStarships()
				getActions().getPlanets()
				getActions().getSpecies()
				getActions().getVehicles()
				getActions().getFilms()
			},
		}
	};
};

export default getState;
