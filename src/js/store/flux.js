const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			singleCharacter: {},
			singleCharacterProperties: {},
			singlePlanet: {},
			singlePlanetProperties: {},
			starships: [],
			singleStarship: {},
			singleStarshipProperties: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				fetch(`https://www.swapi.tech/api/people/`)
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }))
					.catch(err => console.error(err))
			},
			getPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets`)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))
			},
			getCharactersSingle: (id) => {

				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => setStore({ singleCharacter: data.result }, setStore({ singleCharacterProperties: data.result.properties })))
					.catch(err => console.error("no hubo conexion en getCharacterSingle", err))
			},
			getPlanetsSingle: (id) => {

				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(res => res.json())
					.then(data => setStore({ singlePlanet: data.result }, setStore({ singlePlanetProperties: data.result.properties })))
					.catch(err => console.error("no hubo conexion en getCharacterSingle", err))
			},
			getStarships: () => {
				fetch(`https://www.swapi.tech/api/starships/`)
					.then(res => res.json())
					.then(data => setStore({ starships: data.results }))
					.catch(err => console.error(err))
			},
			getStarshipSingle: (id) => {

				fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(res => res.json())
					.then(data => setStore({ singleStarship: data.result }, setStore({ singleStarshipProperties: data.result.properties })))
					.catch(err => console.error("no hubo conexion en getCharacterSingle", err))
			},
			getFavorite: (name) => {
				let storeFavorites = getStore().favorites
				setStore({ favorites: [...storeFavorites, name] })

			},
			removeFavorite: (index) => {
				let storeFavorites = getStore().favorites
				storeFavorites.splice(index, 1)
				setStore({ favorites: storeFavorites })

			},
			loadSomeData: () => {
				getActions().getCharacters()
				getActions().getPlanets()
				getActions().getStarships()
			},
		}
	};
};

export default getState;
