import React from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../config/zustand/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import AlertContainer from "../component/atoms/Alert/AlertContainer";
import { AlertError, AlertSuccess } from "../component/atoms/Alert/Alert";

function Login() {
	const navigate = useNavigate();
	const isLogin = store((state) => state.isLogin);
	const setIsLogin = store((state) => state.setLogin);

	const email = "admin@gmail.com";
	const password = "pancasila";

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email("Isi email dengan benar").required(),
			password: Yup.string().required(),
		}),
		onSubmit: (values) => {
			if (values.email === email && values.password === password) {
				setIsLogin(true);
				AlertSuccess("Login Berhasil");
				setTimeout(() => {
					navigate("/admin/dashboard");
				}, 2500);
			} else {
				AlertError("email dan password salah");
			}
			formik.resetForm();
		},
	});
	return (
		<div>
			<AlertContainer />
			<div className="absolute bg-gradient-to-tr from-emerald-300 via-emerald-100 to-white w-full h-full -z-10 blur-sm"></div>
			<div className="flex justify-center items-center h-screen">
				<div className="w-full max-w-sm">
					<div className="py-3">
						<button
							onClick={() => navigate("/")}
							className="px-4 py-2 bg-emerald-400 text-white rounded-md hover:bg-emerald-500 ">
							Kembali
						</button>
					</div>
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="px-6 py-4">
							<div className="flex justify-center mx-auto">
								<svg
									width="300"
									height="300"
									viewBox="0 0 300 300"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="h-12 w-12 bg-emerald-500">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
										fill="white"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
										fill="rgba(255,255,255,.2)"
									/>
								</svg>
							</div>

							<h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">
								Welcome Back
							</h3>

							<p className="mt-1 text-center text-gray-500 ">Login Sekarang</p>

							<form onSubmit={formik.handleSubmit}>
								<div className="w-full mt-4">
									<input
										className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-emerald-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
										type="email"
										placeholder="Email Address"
										aria-label="Email Address"
										name="email"
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<small className=" py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
										<span className="text-red-400">
											{formik.touched.email && formik.errors.email
												? formik.errors.email
												: ""}
										</span>
									</small>
								</div>

								<div className="w-full mt-4">
									<input
										className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-emerald-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
										type="password"
										placeholder="Password"
										aria-label="Password"
										name="password"
										value={formik.values.password}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<small className=" py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
										<span className="text-red-400">
											{formik.touched.password && formik.errors.password
												? formik.errors.password
												: ""}
										</span>
									</small>
								</div>

								<div className="flex items-center justify-end mt-4">
									<button
										type="submit"
										className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-50">
										Sign In
									</button>
								</div>
							</form>
						</div>

						<div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
							<span className="text-sm text-gray-600 ">Login hanya untuk Admin</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
