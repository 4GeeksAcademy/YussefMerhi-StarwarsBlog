import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const [characterUids, setCharacterUids] = useState([])

    useEffect(() => {
        setCharacterUids(actions.getUID("characters"))
    }, [store.characters])

    return (
        <div className="text-center">
            <h1 className="text-white title">Characters</h1>
            <div className="row d-flex justify-content-center">
                {store.characters.map((character, index) =>
                    <div key={"c" + (index + 1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
                        <Card
                            image={"/workspaces/YussefMerhi-StarwarsBlog/src/img/characters"}
                            title={character.name}
                            uid={"c" + characterUids[index]}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}