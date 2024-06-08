import React, { act, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";

const CardCharacters = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const storeFavorites = store.favorites;

    return (
        <div className="container">
            {store.characters.length === 0 ? (
                <div className="spinner-border m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="d-flex gap-5">
                    {store.characters.map((character, index) => (
                        <div key={character.uid}>
                            <div className="card bg-dark" style={{ width: "18rem" }}>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                                    className="card-img-top img-size"
                                    alt={character.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-light">{character.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => navigate(`/singlecharacterpage/${character.uid}`)}
                                        >
                                            Learn more!
                                        </button>
                                        <button
                                            className={`btn btn-warning border-0 text-light ${storeFavorites.includes(
                                                character.name
                                            )
                                                ? "disabled"
                                                : ""}`}
                                        >
                                            <i
                                                className="fa-solid fa-heart"
                                                onClick={() => actions.getFavorite(character.name)}
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardCharacters;
