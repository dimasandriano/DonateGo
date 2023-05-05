import React from "react";
import Card from "../../molecules/Card/Card";
import moment from "moment/moment";
import Loading from "../../atoms/Loading/Loading";

function Donasi({ data, loading }) {
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-5 mb-10">
			<h1 className="mb-5 text-3xl font-semibold leading-tight text-gray-900">
				Donasi Terbuka
			</h1>
			{loading && <Loading css="w-20" />}
			<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
				{data?.donasi.map((item, idx) => (
					<Card
						key={idx}
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
