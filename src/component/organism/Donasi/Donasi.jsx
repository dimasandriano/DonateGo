import React from "react";
import Card from "../../molecules/Card/Card";
import { useSubscription } from "@apollo/client";
import { getDonationCard } from "../../../config/apollo/donasi";
import moment from "moment/moment";
import Loading from "../../molecules/Loading/Loading";

function Donasi() {
	const { loading, data } = useSubscription(getDonationCard);

	return (
		<div className="mx-auto max-w-screen-xl px-4 py-5 mb-10">
			<h1 className="mb-5 text-3xl font-semibold leading-tight text-gray-900">
				Donasi Terbuka
			</h1>
			{loading && <Loading />}
			<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
				{data?.donasi.map((item) => (
					<Card
						img={item.foto_donasi}
						tanggal={moment(item.timestamp).format("DD MMMM YYYY")}
						judul={item.judul_donasi}
						terkumpul={item.terkumpul_donasi}
						donatur={item.history.length}
						target={item.target_donasi}
						uuid={item.uuid}
					/>
				))}
			</div>
		</div>
	);
}

export default Donasi;
