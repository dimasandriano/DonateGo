import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routing } from "./Routing";

function RootRouting() {
	return (
		<BrowserRouter>
			<Routes>
				{Routing.map((route, idx) => {
					return <Route key={idx} path={route.path} element={route.element} />;
				})}
			</Routes>
		</BrowserRouter>
	);
}

export default RootRouting;
