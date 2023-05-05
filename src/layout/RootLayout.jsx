import React from "react";
import Navbar from "../component/Organisms/Navbar/Navbar";
import Footer from "../component/organisms/Footer/Footer";

function RootLayout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

export default RootLayout;
