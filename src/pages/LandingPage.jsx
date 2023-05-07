import React from "react";
import Hero from "../component/organisms/Hero/Hero";
import Stats from "../component/organisms/Stats/Stats";
import Donasi from "../component/organisms/Donasi/Donasi";
import RootLayout from "../layout/RootLayout";
import { useSubscription } from "@apollo/client";
import { getDonationCard } from "../config/apollo/donasi";
import { getDonaturVerif } from "../config/apollo/dashboard";

function LandingPage() {
	const { loading, data } = useSubscription(getDonationCard);
	const { loading: loadingDonaturVerif, data: dataDonaturVerif } =
		useSubscription(getDonaturVerif);
	return (
		<div>
			<RootLayout>
				<Hero />
				<Stats
					loading={loading}
					data={data}
					loadingDonaturVerif={loadingDonaturVerif}
					dataDonaturVerif={dataDonaturVerif}
				/>
				<Donasi loading={loading} data={data} />
			</RootLayout>
		</div>
	);
}

export default LandingPage;
