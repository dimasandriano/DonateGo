import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routing } from "./Routing";
import { store } from "../zustand/store";
import { PrivateRoute } from "./PrivateRoute";

function RootRouting() {
	const isAuth = store((state) => state.isLogin);
	return (
		<BrowserRouter>
			<Routes>
				{Routing.map((route, idx) => {
					if (route.isPrivate) {
						return (
							<Route
								key={idx}
								path={route.path}
								element={
									<PrivateRoute authentication={isAuth}>{route.element}</PrivateRoute>
								}
							/>
						);
					}
					return <Route key={idx} path={route.path} element={route.element} />;
				})}
			</Routes>
		</BrowserRouter>
	);
}

export default RootRouting;
