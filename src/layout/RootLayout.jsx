import React from "react";
import Navbar from "../component/organisms/Navbar/Navbar";
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
