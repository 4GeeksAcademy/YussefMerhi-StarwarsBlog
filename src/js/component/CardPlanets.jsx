import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanets = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            {store.planets.map((value, index) => (
                <div key={index}>
                    <div className="card bg-dark" style={{ width: "18rem" }}>
                        <img
                            src={`${value.uid === 1 ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : `https://starwars-visualguide.com/assets/img/planets/${value.uid}.jpg`}`}
                            className="img-size"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/286x180";
                            }}
                            alt={`Planet ${value.name}`}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            <div className="d-flex justify-content-between">
                                <Link to={`/singleplanetpage/${value.uid}`}>
                                    <button className="btn btn-primary">Learn more!</button>
                                </Link>
                                <button
                                    className={`btn btn-warning border-0 text-light ${store.favorites.includes(value.name) ? "disabled" : ""
                                        }`}
                                    onClick={() => actions.getFavorite(value.name)}
                                    aria-disabled={store.favorites.includes(value.name)}
                                >
                                    <i className="fa-solid fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardPlanets;
