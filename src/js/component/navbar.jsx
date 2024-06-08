import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import normalLogo from "../../img/normal-logo.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="bg-dark" style={{ position: "sticky", top: "0", zIndex: "99" }}>
			<nav className="navbar ">
				<div className="container">
					<div className="navbar-brand">
						<Link to={"/"}>
							<img src={normalLogo} className="sw-logo" />
						</Link>
					</div>
					<div className="dropdown ">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</button>

						<div className="dropdown-menu bg-dark" style={{ width: "200px" }}>

							<div className="row px-3 text-light" >
								{store.favorites.map((value, index) => {
									return <>
										<div className="col-6"><p>{value}</p></div>
										<div className="col-6"> <button
											className={`btn btn-primary ${store.favorites.length == 0 ? "opacity-0" : "opacity-100"}`}
											onClick={() => {
												actions.removeFavorite(index);
											}}><i class="fa-solid fa-trash-can"></i></button></div>
									</>
								})}

							</div>
						</div>
					</div>
				</div >

			</nav >

		</div >

	);
};