import React, { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { useMutation, useSubscription } from "@apollo/client";
import Loading from "../../component/atoms/Loading/Loading";
import moment from "moment";
import {
	AlertError,
	AlertInfo,
	AlertSuccess,
} from "../../component/atoms/Alert/Alert";
import AlertContainer from "../../component/atoms/Alert/AlertContainer";
import { useNavigate } from "react-router-dom";
import {
	deleteDonaturById,
	getDonatur,
	switchVerif,
} from "../../config/apollo/dashboard";
function AdminDonatur() {
	const [limit, setLimit] = useState(10);
	const [nama, setNama] = useState("");
	const navigate = useNavigate();

	const { data: listDonatur, loading } = useSubscription(getDonatur, {
		variables: {
			limit,
			nama: `%${nama}%`,
		},
	});
	const [deleteDonatur, { error: errorDeleteDonaturById }] =
		useMutation(deleteDonaturById);
	const [toogleVerif, { error: errorSwitchVerif }] = useMutation(switchVerif);

	const handleDelete = (id) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			deleteDonatur({
				variables: {
					id,
				},
			});
			AlertInfo("Proses.....");
			if (errorDeleteDonaturById) {
				AlertError("Gagal");
			} else {
				setTimeout(() => {
					AlertSuccess("Berhasil Hapus");
				}, 1000);
			}
		}
	};
	const handleVerif = (id, isverif) => {
		toogleVerif({
			variables: {
				id,
				isverif: !isverif,
			},
		});
		AlertInfo("Proses.....");
		if (errorSwitchVerif) {
			AlertError("Gagal");
		} else {
			setTimeout(() => {
				AlertSuccess("Berhasil Mengganti");
			}, 1000);
		}
	};
	const handleLoadMore = () => {
		setLimit(limit + 10);
	};
	return (
		<>
			<AdminLayout>
				<AlertContainer />
				<div className="flex justify-between items-center w-full mt-6 px-5">
					<h1 className="font-bold text-4xl text-gray-700">List Donatur</h1>
				</div>
				<input
					type="text"
					placeholder="Masukkan Nama Donatur"
					value={nama}
					onChange={(e) => setNama(e.target.value)}
					className="block w-full md:w-1/3 mb-3 px-4 py-2 my-3 mx-5 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-emerald-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
				/>
				<div className="flex flex-col pb-3 px-5">
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
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
												<span>Email</span>
											</th>
											<th
												scope="col"
												className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
												<span>No HP</span>
											</th>
											<th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
												<span>Jumlah Donasi</span>
											</th>

											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
												Link Bukti
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
											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
												Aksi
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200 ">
										{listDonatur &&
											listDonatur.history_donasi.map((item, idx) => {
												return (
													<tr key={idx}>
														<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap">
															<h2 className="font-medium text-gray-800  ">{idx + 1}</h2>
														</td>
														<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap">
															<h2 className="font-normal text-gray-800  ">{item.nama}</h2>
														</td>
														<td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap block">
															{item.email}
														</td>
														<td className="px-12 py-4 text-sm  text-gray-700 whitespace-nowrap">
															{item.nohp}
														</td>
														<td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
															Rp {item.jumlah_donasi.toLocaleString()}
														</td>
														<td className="px-4 py-4 text-sm font-medium text-blue-500 whitespace-wrap overflow-hidden block w-20">
															<a
																className="text-sm font-normal truncate"
																href={item.bukti_donasi}
																target="_blank">
																{item.bukti_donasi}
															</a>
														</td>
														<td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
															{moment(item.tanggal_donasi).format("DD MMMM YYYY")}
														</td>
														<td className="px-4 py-4 text-sm  text-white whitespace-nowrap">
															<button
																onClick={() => handleVerif(item.id_history, item.isverif)}>
																{item.isverif ? (
																	<span className="py-1 px-2 rounded-lg rounded=sm bg-emerald-500">
																		Verif
																	</span>
																) : (
																	<span className="py-1 px-2 rounded-lg rounded=sm bg-red-500">
																		Unverif
																	</span>
																)}
															</button>
														</td>

														<td className="px-4 py-4 text-sm whitespace-nowrap">
															<div className="flex items-center gap-x-6">
																<button
																	onClick={() => handleDelete(item.id_history)}
																	className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500  hover:text-red-500 focus:outline-none">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		fill="none"
																		viewBox="0 0 24 24"
																		strokeWidth="1.5"
																		stroke="currentColor"
																		className="w-5 h-5">
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
																		/>
																	</svg>
																</button>
																<button
																	onClick={() => {
																		navigate(`/admin/donatur/${item.id_history}`);
																	}}
																	className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500  hover:text-yellow-500 focus:outline-none">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		fill="none"
																		viewBox="0 0 24 24"
																		strokeWidth="1.5"
																		stroke="currentColor"
																		className="w-5 h-5">
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
																		/>
																	</svg>
																</button>
															</div>
														</td>
													</tr>
												);
											})}
									</tbody>
								</table>
								{listDonatur?.history_donasi.length == 0 && (
									<div className="flex justify-center w-full py-5">Data Tidak Ada</div>
								)}
								{loading && <Loading css="w-10" />}
							</div>
						</div>
					</div>
				</div>
				<div className="px-5">
					{listDonatur?.history_donasi.length == limit && (
						<button
							onClick={handleLoadMore}
							className="px-3 py-2 rounded-md bg-emerald-500 text-white">
							Load More
						</button>
					)}
				</div>
			</AdminLayout>
		</>
	);
}

export default AdminDonatur;
