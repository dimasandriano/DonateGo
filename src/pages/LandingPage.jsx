import React from "react";
import Navbar from "../component/organism/Navbar/Navbar";
import Hero from "../component/organism/Hero/Hero";
import Stats from "../component/organism/Stats/Stats";
import Donasi from "../component/organism/Donasi/Donasi";
import Footer from "../component/organism/Footer/Footer";

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
