import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../molecules/Modal/Modal";
import { IoIosArrowBack } from "react-icons/io";
import Loading from "../../atoms/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { insertHistoryDonation } from "../../../config/apollo/donasi";
import { useMutation } from "@apollo/client";
import AlertContainer from "../../atoms/Alert/AlertContainer";
import { AlertError, AlertInfo, AlertSuccess } from "../../atoms/Alert/Alert";

function Detail({ donasi, loading }) {
	const navigate = useNavigate();
	const hasil = donasi?.terkumpul_donasi - donasi?.target_donasi;
	const [showModal, setShowModal] = useState(true);
	const [
		insertDonatur,
		{ loading: loadingInsertDonatur, error: errorInsertDonatur },
	] = useMutation(insertHistoryDonation);

	const formik = useFormik({
		initialValues: {
			nama: "",
			email: "",
			noHp: "",
			jumlahDonasi: 100000,
			bukti: "",
		},
		validationSchema: Yup.object().shape({
			nama: Yup.string().required(),
			email: Yup.string().email().required(),
			noHp: Yup.number().required(),
			jumlahDonasi: Yup.number(),
			bukti: Yup.string().required(),
		}),
		onSubmit: (values) => {
			insertDonatur({
				variables: {
					id_donasi: donasi?.id,
					nama: values.nama,
					email: values.email,
					nohp: values.noHp,
					bukti_donasi: values.bukti,
					jumlah_donasi: values.jumlahDonasi,
				},
			});
			setShowModal(false);
		},
	});
	if (loadingInsertDonatur) {
		AlertInfo("Proses.....");
		setTimeout(() => {
			AlertSuccess("Berhasil Donasi");
			setShowModal(true);
		}, 1000);
	}
	if (errorInsertDonatur) {
		AlertError("Gagal");
	}
	return (
		<div className="relative">
			<div className="absolute bg-gradient-to-tr from-emerald-200 via-emerald-100/50 to-white w-full h-full -z-10 blur-sm"></div>
			<div className="mx-auto max-w-screen-xl px-4 py-12">
				<AlertContainer />
				<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
					<div className="col-span-4 lg:col-span-8 ">
						<div className="bg-white rounded-lg shadow p-6">
							<button
								className="bg-emerald-400 hover:bg-emerald-500 rounded text-white px-3 py-2 mb-3 flex items-center"
								onClick={() => navigate(-1)}>
								<IoIosArrowBack />
								Kembali
							</button>
							{loading ? (
								<Loading css="w-14" />
							) : (
								<>
									<h1 className="text-xl font-semibold tracking-wide">
										{donasi?.judul_donasi}
									</h1>
									<span className="text-slate-400 text-sm mb-3 block">
										{moment(donasi?.timestamp).format("DD MMMM YYYY")}
									</span>
									<div className=" rounded-lg overflow-hidden h-56 lg:h-80 mb-3">
										<img src={donasi?.foto_donasi} alt="" className="w-full" />
									</div>
									<h2 className="text-emerald-500 text-lg font-normal">Judul</h2>
									<p className="text-lg font-semibold mb-3">{donasi?.judul_donasi}</p>
									<h2 className="text-emerald-500 text-lg font-normal">Deskripsi</h2>
									<p className="break-all">{donasi?.deskripsi_donasi}</p>
								</>
							)}
						</div>
					</div>
					<div className="col-span-4">
						<div className="bg-white rounded-lg shadow p-4 mb-3">
							<h2 className="text-lg font-semibold mb-2">Informasi</h2>
							<div className="rounded bg-slate-100 p-4">
								<div className="flex justify-between">
									<h3>Terkumpul</h3>
									<span>Rp. {donasi?.terkumpul_donasi.toLocaleString()}</span>
								</div>
								<div className="flex justify-between">
									<h3>Target</h3>
									<span>Rp. {donasi?.target_donasi.toLocaleString()}</span>
								</div>
								<hr />
								<div className="flex justify-between">
									<h3>Hasil</h3>
									<span>
										{hasil && hasil > 0
											? `+ Rp. ${hasil.toLocaleString()}`
											: `- Rp. ${Math.abs(hasil).toLocaleString()}`}
									</span>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow p-4 mb-3">
							{showModal && (
								<Modal
									text="Donasi Sekarang"
									textdisable="Donasi Ditutup"
									judul="Yuk Donasi"
									disable={donasi?.terkumpul_donasi >= donasi?.target_donasi}>
									<form action="" onSubmit={formik.handleSubmit}>
										<div className="relative my-3">
											<input
												id="id-b09"
												type="text"
												name="nama"
												value={formik.values.nama}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												placeholder="Masukkan Nama"
												className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
											/>
											<label
												htmlFor="id-b09"
												className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
												Nama
											</label>
											<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
												<span className="text-red-400">
													{formik.touched.nama && formik.errors.nama
														? formik.errors.nama
														: ""}
												</span>
											</small>
										</div>
										<div className="relative my-3">
											<input
												id="id-b09"
												type="email"
												name="email"
												value={formik.values.email}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												placeholder="Email"
												className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
											/>
											<label
												htmlFor="id-b09"
												className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
												Email
											</label>
											<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
												<span className="text-red-400">
													{formik.touched.email && formik.errors.email
														? formik.errors.email
														: ""}
												</span>
											</small>
										</div>
										<div className="relative my-3">
											<input
												id="id-b09"
												type="number"
												name="noHp"
												value={formik.values.noHp}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												placeholder="No HP"
												className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
											/>
											<label
												htmlFor="id-b09"
												className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
												No HP
											</label>
											<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
												<span className="text-red-400">
													{formik.touched.noHp && formik.errors.noHp
														? formik.errors.noHp
														: ""}
												</span>
											</small>
										</div>
										<div className="my-3">
											<input
												id="id-b09"
												type="range"
												min={100000}
												step={100000}
												max={donasi?.target_donasi}
												name="jumlahDonasi"
												value={formik.values.jumlahDonasi}
												onChange={formik.handleChange}
												className="w-full text-sm transition-all border rounded appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-emerald-100 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500"
											/>
											<small className="flex justify-between px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
												<span>Masukkan Jumlah Uang yang akan didonasikan</span>
												<span className="bg-emerald-400 text-white px-1 rounded-md text-base">
													Rp {formik.values.jumlahDonasi.toLocaleString()}
												</span>
											</small>
										</div>
										<div className="relative my-3">
											<input
												id="id-b09"
												type="text"
												name="bukti"
												value={formik.values.bukti}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												placeholder="Link Bukti"
												className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
											/>
											<label
												htmlFor="id-b09"
												className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
												Link Bukti
											</label>
											<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
												<span className="text-red-400">
													{formik.touched.bukti && formik.errors.bukti
														? formik.errors.bukti
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
						<div className="bg-white rounded-lg shadow p-4">
							<h2 className="text-base font-medium">Histori Donatur</h2>
							{loading ? (
								<Loading css="w-12" />
							) : (
								<>
									<ul className="divide-y divide-slate-100">
										{donasi?.history.map((item, idx) => (
											<li className="flex items-center gap-4 py-3" key={idx}>
												<div className="flex items-center self-center shrink-0">
													<img
														src="https://tailwindmix.b-cdn.net/products/product-shoe-01.jpeg"
														alt="product image"
														className="w-14 rounded"
													/>
												</div>
												<div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center flex-1 min-w-0">
													<h4 className="w-full text-base truncate text-slate-700">
														{item.nama}
													</h4>
													<p className="w-full text-xs text-slate-500">
														{moment(item.tanggal_donasi).format("DD MMMM YYYY")} <br />
														<span
															className={`${item.isverif ? "bg-emerald-400" : "bg-red-400"}
												 rounded-md text-white px-1
												`}>
															{item.isverif ? "Verif" : "Unverif"}
														</span>
													</p>
												</div>
												<div className="text-xs text-slate-400">
													Rp {item.jumlah_donasi.toLocaleString()}
												</div>
											</li>
										))}
									</ul>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;
