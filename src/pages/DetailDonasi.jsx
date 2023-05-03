import React from "react";
import Navbar from "../component/organisms/Navbar/Navbar";
import Footer from "../component/organisms/Footer/Footer";
import { useParams } from "react-router-dom";
import Detail from "../component/organisms/Detail/Detail";
import { useQuery, useSubscription } from "@apollo/client";
import { getDetailDonation } from "../config/apollo/donasi";

function DetailDonasi() {
	const { uuid } = useParams();
	const { loading: loadingDetail, data } = useQuery(getDetailDonation, {
		variables: { uuid },
	});
	const donasi = data?.donasi[0];
	return (
		<div>
			<Navbar />
			<Detail donasi={donasi} loading={loadingDetail} />
			<Footer />
		</div>
	);
}

export default DetailDonasi;
