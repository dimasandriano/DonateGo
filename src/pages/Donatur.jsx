import React, { useState } from "react";
import RootLayout from "../layout/RootLayout";
import { useSubscription } from "@apollo/client";
import { getDonatur } from "../config/apollo/donasi";
import Loading from "../component/atoms/Loading/Loading";
import moment from "moment";

function Donatur() {
	const [limit, setLimit] = useState(10);
	const [nama, setNama] = useState("");
	const { data, loading } = useSubscription(getDonatur, {
		variables: {
			limit,
			nama: `%${nama}%`,
		},
	});
	const handleLoadMore = () => {
		setLimit(limit + 10);
	};

	return (
		<div>
			<RootLayout>
				<section className="px-4 py-5 mx-auto max-w-7xl min-h-[400px]">
					<div className="md:flex justify-between">
						<h1 className="text-4xl font-bold">List Donatur</h1>
						<input
							type="text"
							placeholder="Masukkan nama Anda"
							value={nama}
							onChange={(e) => setNama(e.target.value)}
							className="block w-full md:w-1/3 mb-3 px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-emerald-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
						/>
					</div>
					<div className="flex flex-col">
						<div className="overflow-x-auto">
							<div className="inline-block min-w-full  align-middle">
								<div className="overflow-hidden border border-gray-200 md:rounded-lg">
									<table className="min-w-full divide-y divide-gray-200 ">
										<thead className="bg-gray-50 ">
											<tr>
												<th
													scope="col"
													className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
													<div className="flex items-center gap-x-3">
														<span className="font-bold">No</span>
													</div>
												</th>
												<th
													scope="col"
													className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
													<div className="flex items-center gap-x-3">
														<span>Nama</span>
													</div>
												</th>

												<th
													scope="col"
													className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
													<button>
														<span>Email</span>
													</button>
												</th>

												<th
													scope="col"
													className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
													<button>
														<span>No HP</span>
													</button>
												</th>

												<th
													scope="col"
													className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
													Jumlah Donasi
												</th>
												<th
													scope="col"
													className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
													Tanggal
												</th>
												<th
													scope="col"
													className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
													Status
												</th>
											</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200 ">
											{data &&
												data.history_donasi.map((item, idx) => {
													return (
														<tr key={idx}>
															<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap">
																<h2 className="font-medium text-gray-800  ">{idx + 1}</h2>
															</td>
															<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap">
																<h2 className="font-normal text-gray-800  ">{item.nama}</h2>
															</td>
															<td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																<h2 className="text-sm font-normal ">{item.email}</h2>
															</td>
															<td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
																{item.nohp}
															</td>
															<td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
																Rp {item.jumlah_donasi.toLocaleString()}
															</td>
															<td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
																{moment(item.tanggal_donasi).format("DD MMMM YYYY")}
															</td>
															<td className=" text-sm text-white whitespace-nowrap  flex w-full justify-center py-3">
																{item.isverif ? (
																	<span className="py-1 px-2 rounded-lg rounded=sm bg-emerald-500">
																		Verif
																	</span>
																) : (
																	<span className="py-1 px-2 rounded-lg rounded=sm bg-red-500">
																		Unverif
																	</span>
																)}
															</td>
														</tr>
													);
												})}
										</tbody>
									</table>
									{data?.history_donasi.length == 0 && (
										<div className="flex justify-center w-full py-5">Data Tidak Ada</div>
									)}
									{loading && <Loading css="w-10 py-5" />}
								</div>
							</div>
						</div>
					</div>
					{data?.history_donasi.length == limit && (
						<button
							onClick={handleLoadMore}
							className="px-3 py-2 rounded-md bg-emerald-500 text-white my-3">
							Load More
						</button>
					)}
				</section>
			</RootLayout>
		</div>
	);
}

export default Donatur;
