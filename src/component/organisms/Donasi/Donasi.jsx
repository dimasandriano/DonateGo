import React, { useState } from "react";
import Card from "../../molecules/Card/Card";
import moment from "moment/moment";
import Loading from "../../atoms/Loading/Loading";

function Donasi({ data, loading }) {
	const [limit, setLimit] = useState(4);
	const handleLoadMore = () => {
		setLimit(limit + 4);
	};
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-5 mb-10" id="donasi">
			<h1 className="mb-5 text-3xl font-semibold leading-tight text-gray-900">
				Donasi
			</h1>
			{loading && <Loading css="w-20" />}
			<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
				{data?.donasi.slice(0, limit).map((item, idx) => (
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
			{data?.donasi.length > limit && (
				<div className="flex justify-end">
					<button
						onClick={handleLoadMore}
						className="px-3 py-2 rounded-md bg-emerald-500 text-white my-3">
						Load More
					</button>
				</div>
			)}
		</div>
	);
}

export default Donasi;
