import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/apollo";
import DetailDonasi from "./pages/DetailDonasi";

export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/detaildonasi/:uuid" element={<DetailDonasi />} />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	);
}
