import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";
import {
	AlertError,
	AlertInfo,
	AlertSuccess,
} from "../../component/atoms/Alert/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import Loading from "../../component/atoms/Loading/Loading";
import AlertContainer from "../../component/atoms/Alert/AlertContainer";
import { getDetailDonatur, updateDonatur } from "../../config/apollo/dashboard";

function AdminEditDonatur() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, loading } = useQuery(getDetailDonatur, {
		variables: {
			id,
		},
	});
	const donatur = data ? data.history_donasi_by_pk : [];
	const [
		updateDonaturById,
		{ loading: loadingUpdateDonatur, error: errorUpdateDonatur },
	] = useMutation(updateDonatur);
	const formik = useFormik({
		initialValues: {
			id_history: id,
			nama: donatur.nama,
			email: donatur.email,
			nohp: donatur.nohp,
			jumlah_donasi: donatur.jumlah_donasi,
			bukti_donasi: donatur.bukti_donasi,
			isverif: donatur.isverif,
		},
		validationSchema: Yup.object().shape({
			nama: Yup.string().required(),
			email: Yup.string().email().required(),
			nohp: Yup.number().required(),
			jumlah_donasi: Yup.number().required(),
			bukti_donasi: Yup.string().required(),
			isverif: Yup.string().required(),
		}),
		onSubmit: (values) => {
			updateDonaturById({
				variables: {
					id: id,
					nama: values.nama,
					email: values.email,
					nohp: values.nohp,
					jumlah_donasi: values.jumlah_donasi,
					bukti_donasi: values.bukti_donasi,
					isverif: values.isverif,
				},
			});
			AlertInfo("Proses.....");
			if (errorUpdateDonatur) {
				AlertError("Gagal");
			} else {
				setTimeout(() => {
					AlertSuccess("Berhasil Update");
					setTimeout(() => {
						navigate("/admin/donatur");
					}, 2500);
				}, 1000);
			}
		},
	});
	useEffect(() => {
		formik.values.id_history = id;
		formik.values.nama = donatur.nama;
		formik.values.email = donatur.email;
		formik.values.nohp = donatur.nohp;
		formik.values.jumlah_donasi = donatur.jumlah_donasi;
		formik.values.bukti_donasi = donatur.bukti_donasi;
		formik.values.tanggal_donasi = donatur.tanggal_donasi;
		formik.values.isverif = donatur.isverif;
	}, [donatur]);
	return (
		<div>
			<AdminLayout>
				<AlertContainer />
				<div className="mt-6 px-5">
					<h1 className="font-bold text-4xl text-gray-700 mb-8">Edit Data Donasi</h1>
					{loading ? (
						<Loading css="w-10" />
					) : (
						<form
							action=""
							className="w-full md:w-1/2"
							onSubmit={formik.handleSubmit}>
							<div className="relative my-3">
								<input
									id="id"
									type="text"
									name="id"
									value={id}
									disabled
									placeholder="Masukkan judul_donasi"
									className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="id"
									className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									ID
								</label>
							</div>
							<div className="relative my-3">
								<input
									id="nama"
									type="text"
									name="nama"
									defaultValue={donatur.nama}
									value={formik.values.nama}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder="Masukkan Nama"
									className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="nama"
									className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									Nama
								</label>
								<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
									<span className="text-red-400">
										{formik.touched.nama && formik.errors.nama ? formik.errors.nama : ""}
									</span>
								</small>
							</div>
							<div className="relative my-3">
								<input
									id="email"
									type="email"
									name="email"
									defaultValue={donatur.email}
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder="Masukkan Email"
									className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="target"
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
									id="nohp"
									type="number"
									name="nohp"
									defaultValue={donatur.nohp}
									value={formik.values.nohp}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder="Masukkan No Hp"
									className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="foto"
									className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									No HP
								</label>
								<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
									<span className="text-red-400">
										{formik.touched.nohp && formik.errors.nohp ? formik.errors.nohp : ""}
									</span>
								</small>
							</div>
							<div className="relative my-3">
								<input
									id="jumlah_donasi"
									type="number"
									name="jumlah_donasi"
									defaultValue={donatur.jumlah_donasi}
									value={formik.values.jumlah_donasi}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder="Masukkan No Hp"
									className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="foto"
									className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									Jumlah Donasi
								</label>
								<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
									<span className="text-red-400">
										{formik.touched.jumlah_donasi && formik.errors.jumlah_donasi
											? formik.errors.jumlah_donasi
											: ""}
									</span>
								</small>
							</div>
							<div className="relative my-3">
								<input
									id="bukti_donasi"
									type="text"
									name="bukti_donasi"
									defaultValue={donatur.bukti_donasi}
									value={formik.values.bukti_donasi}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder="Masukkan Link Bukti"
									className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="bukti_donasi"
									className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									Link Bukti
								</label>
								<small className="px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
									<span className="text-red-400">
										{formik.touched.bukti_donasi && formik.errors.bukti_donasi
											? formik.errors.bukti_donasi
											: ""}
									</span>
								</small>
							</div>
							<div className="relative my-3">
								<select
									name="isverif"
									id=""
									defaultValue={donatur.isverif}
									value={formik.values.isverif}
									onChange={formik.handleChange}
									className="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
									<option value={true}>Terverif</option>
									<option value={false}>Unverif/Gagal</option>
								</select>
								<label
									for="id-04"
									class="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									Select an option
								</label>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-labelledby="title-04 description-04"
									role="graphics-symbol">
									<title id="title-04">Arrow Icon</title>
									<desc id="description-04">Arrow icon of the select list.</desc>
									<path
										fill-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>

							<button
								type="submit"
								className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 ">
								<span>Submit</span>
							</button>
						</form>
					)}
				</div>
			</AdminLayout>
		</div>
	);
}

export default AdminEditDonatur;
