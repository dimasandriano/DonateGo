import React from "react";
import Navbar from "../component/organisms/Navbar/Navbar";
import Hero from "../component/organisms/Hero/Hero";
import Stats from "../component/organisms/Stats/Stats";
import Donasi from "../component/organisms/Donasi/Donasi";
import Footer from "../component/organisms/Footer/Footer";

function LandingPage() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Stats />
			<Donasi />
			<Footer />
		</div>
	);
}

export default LandingPage;
