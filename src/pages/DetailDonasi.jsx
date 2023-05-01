import React from "react";
import Navbar from "../component/organism/Navbar/Navbar";
import Footer from "../component/organism/Footer/Footer";
import { useParams } from "react-router-dom";
import Detail from "../component/organism/Detail/Detail";
import { useSubscription } from "@apollo/client";
import { getDetailDonation } from "../config/apollo/donasi";

function DetailDonasi() {
	const { uuid } = useParams();
	const { data } = useSubscription(getDetailDonation, {
		variables: { uuid },
	});
	const donasi = data?.donasi[0];
	return (
		<div>
			<Navbar />
			<Detail donasi={donasi} />
			<Footer />
		</div>
	);
}

export default DetailDonasi;
