import React, { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { useMutation, useSubscription } from "@apollo/client";
import {
	deleteDonationById,
	getDonasiAdmin,
	insertDonationInAdmin,
} from "../../config/apollo/adminDonasi";
import Loading from "../../component/atoms/Loading/Loading";
import Modal from "../../component/molecules/Modal/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import {
	AlertError,
	AlertInfo,
	AlertSuccess,
} from "../../component/atoms/Alert/Alert";
import AlertContainer from "../../component/atoms/Alert/AlertContainer";
import { useNavigate } from "react-router-dom";
function AdminDonasi() {
	const [showModal, setShowModal] = useState(true);
	const navigate = useNavigate();
	const { data: listDonasi, loading } = useSubscription(getDonasiAdmin);
	const [insertDonateInAdmin, { error: errorinsertDonateInAdmin }] = useMutation(
		insertDonationInAdmin
	);
	const [deleteDonasiById, { error: errorDeleteDonasiById }] =
		useMutation(deleteDonationById);
	const formik = useFormik({
		initialValues: {
			judul_donasi: "",
			target_donasi: "",
			foto_donasi: "",
			deskripsi_donasi: "",
		},
		validationSchema: Yup.object().shape({
			judul_donasi: Yup.string().required(),
			target_donasi: Yup.number().required(),
			foto_donasi: Yup.string().required(),
			deskripsi_donasi: Yup.string().required(),
		}),
		onSubmit: (values) => {
			insertDonateInAdmin({
				variables: {
					judul_donasi: values.judul_donasi,
					target_donasi: values.target_donasi,
					foto_donasi: values.foto_donasi,
					deskripsi_donasi: values.deskripsi_donasi,
				},
			});
			setShowModal(false);
			AlertInfo("Proses.....");
			if (errorDeleteDonasiById) {
				AlertError("Gagal");
			} else {
				setTimeout(() => {
					AlertSuccess("Berhasil");
				}, 1000);
			}
		},
	});

	const handleDelete = (id) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			deleteDonasiById({
				variables: {
					id,
				},
			});
			AlertInfo("Proses.....");
			if (errorinsertDonateInAdmin) {
				AlertError("Gagal");
			} else {
				setTimeout(() => {
					AlertSuccess("Berhasil Hapus");
				}, 1000);
			}
		}
	};
	return (
		<>
			<AdminLayout>
				<AlertContainer />
				<div className="flex justify-between items-center w-full mt-6 px-5">
					<h1 className="font-bold text-4xl text-gray-700">List Donasi</h1>
					<div>
						{showModal && (
							<Modal text="Tambah" judul="Tambah Donasi">
								<form action="" onSubmit={formik.handleSubmit}>
									<div className="relative my-3">
										<input
											id="judul"
											type="text"
											name="judul_donasi"
											value={formik.values.judul_donasi}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											placeholder="Masukkan judul_donasi"
											className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
										/>
										<label
											htmlFor="judul"
											className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
											Judul
										</label>
										<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
											<span className="text-red-400">
												{formik.touched.judul_donasi && formik.errors.judul_donasi
													? formik.errors.judul_donasi
													: ""}
											</span>
										</small>
									</div>
									<div className="relative my-3">
										<input
											id="target"
											type="number"
											name="target_donasi"
											value={formik.values.target_donasi}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											placeholder="Masukkan Target"
											className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
										/>
										<label
											htmlFor="target"
											className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
											Target Uang
										</label>
										<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
											<span className="text-red-400">
												{formik.touched.target_donasi && formik.errors.target_donasi
													? formik.errors.target_donasi
													: ""}
											</span>
										</small>
									</div>
									<div className="relative my-3">
										<input
											id="foto"
											type="text"
											name="foto_donasi"
											value={formik.values.foto_donasi}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											placeholder="Masukkan Link Foto"
											className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
										/>
										<label
											htmlFor="foto"
											className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
											Link Foto
										</label>
										<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
											<span className="text-red-400">
												{formik.touched.foto_donasi && formik.errors.foto_donasi
													? formik.errors.foto_donasi
													: ""}
											</span>
										</small>
									</div>
									<div className="relative my-3">
										<textarea
											name="deskripsi_donasi"
											id="desc"
											cols="20"
											rows="5"
											value={formik.values.deskripsi_donasi}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className="relative w-full px-4 py-1 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"></textarea>
										<label
											htmlFor="desc"
											className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
											Deskripsi Donasi
										</label>
										<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
											<span className="text-red-400">
												{formik.touched.deskripsi_donasi && formik.errors.deskripsi_donasi
													? formik.errors.deskripsi_donasi
													: ""}
											</span>
										</small>
									</div>
									<button
										type="submit"
										className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
										<span>Submit</span>
									</button>
								</form>
							</Modal>
						)}
					</div>
				</div>
				<div className="flex flex-col p-5">
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
													<span>Judul</span>
												</div>
											</th>

											<th
												scope="col"
												className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
												<button>
													<span>Target</span>
												</button>
											</th>

											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
												<button>
													<span>Terkumpul</span>
												</button>
											</th>

											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
												Waktu Dibuat
											</th>
											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
												Aksi
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200 ">
										{listDonasi &&
											listDonasi.donasi.map((item, idx) => {
												return (
													<tr key={idx}>
														<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap">
															<h2 className="font-medium text-gray-800  ">{idx + 1}</h2>
														</td>
														<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap">
															<h2 className="font-normal text-gray-800  ">
																{item.judul_donasi}
															</h2>
														</td>
														<td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
															<h2 className="text-sm font-normal ">
																Rp {item.target_donasi.toLocaleString()}
															</h2>
														</td>
														<td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
															Rp {item.terkumpul_donasi.toLocaleString()}
														</td>
														<td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
															{moment(item.timestamp).format("DD MMMM YYYY")}
														</td>

														<td className="px-4 py-4 text-sm whitespace-nowrap">
															<div className="flex items-center gap-x-6">
																<button
																	onClick={() => handleDelete(item.id)}
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
																		navigate(`/admin/donasi/${item.uuid}`);
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
								{loading && <Loading css="w-10" />}
							</div>
						</div>
					</div>
				</div>
			</AdminLayout>
		</>
	);
}

export default AdminDonasi;
