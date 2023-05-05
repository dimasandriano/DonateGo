import React, { useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";
import {
	AlertError,
	AlertInfo,
	AlertSuccess,
} from "../../component/atoms/Alert/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import {
	getDetailDonationByUUid,
	updateDonationByUuid,
} from "../../config/apollo/adminDonasi";
import Loading from "../../component/atoms/Loading/Loading";
import AlertContainer from "../../component/atoms/Alert/AlertContainer";

function AdminEditDonasi() {
	const { uuid } = useParams();
	const navigate = useNavigate();
	const { data, loading } = useQuery(getDetailDonationByUUid, {
		variables: {
			uuid,
		},
	});
	const [
		updateDonateByUuid,
		{ loading: loadingUpdateDonate, error: errorUpdateDonate },
	] = useMutation(updateDonationByUuid);
	const donasi = data ? data.donasi[0] : [];
	const formik = useFormik({
		initialValues: {
			judul_donasi: donasi.jumlah_donasi,
			target_donasi: donasi.target_donasi,
			foto_donasi: donasi.foto_donasi,
			deskripsi_donasi: donasi.deskripsi_donasi,
		},
		validationSchema: Yup.object().shape({
			judul_donasi: Yup.string().required(),
			target_donasi: Yup.number().required(),
			foto_donasi: Yup.string().required(),
			deskripsi_donasi: Yup.string().required(),
		}),
		onSubmit: (values) => {
			updateDonateByUuid({
				variables: {
					uuid: uuid,
					judul_donasi: values.judul_donasi,
					target_donasi: values.target_donasi,
					foto_donasi: values.foto_donasi,
					deskripsi_donasi: values.deskripsi_donasi,
				},
			});
			AlertInfo("Proses.....");
			if (errorUpdateDonate) {
				AlertError("Gagal");
			} else {
				setTimeout(() => {
					AlertSuccess("Berhasil Update");
					setTimeout(() => {
						navigate("/admin/donasi");
					}, 2500);
				}, 1000);
			}
		},
	});
	useEffect(() => {
		formik.values.judul_donasi = donasi.judul_donasi;
		formik.values.target_donasi = donasi.target_donasi;
		formik.values.foto_donasi = donasi.foto_donasi;
		formik.values.deskripsi_donasi = donasi.deskripsi_donasi;
	}, [donasi]);
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
									id="uuid"
									type="text"
									name="uuid"
									value={uuid}
									disabled
									placeholder="Masukkan judul_donasi"
									className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="uuid"
									className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									UUID
								</label>
							</div>
							<div className="relative my-3">
								<input
									id="Judul"
									type="text"
									name="judul_donasi"
									defaultValue={donasi.judul_donasi}
									value={formik.values.judul_donasi}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder="Masukkan judul_donasi"
									className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="uuid"
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
									defaultValue={donasi.target_donasi}
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
									defaultValue={donasi.foto_donasi}
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
									defaultValue={donasi.deskripsi_donasi}
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

export default AdminEditDonasi;
