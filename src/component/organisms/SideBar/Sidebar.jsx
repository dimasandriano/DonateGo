import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { store } from "../../../config/zustand/store";

function Sidebar() {
	const navigate = useNavigate();
	const setLogin = store((state) => state.setLogin);
	const handleLogout = () => {
		if (window.confirm("Anda akan logout?")) {
			navigate("/");
			setLogin(false);
		}
	};
	return (
		<div>
			<div className="shadow-sm">
				<div className="flex flex-col sm:flex-row sm:justify-around">
					<div className="h-screen w-full">
						<div className="flex items-center justify-start mx-6 mt-10">
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
							<span className="text-gray-600  ml-4 text-2xl font-bold">Dashboard</span>
						</div>
						<nav className="mt-10 px-6 ">
							<a
								className="hover:text-gray-800 cursor-pointer hover:bg-emerald-100 flex items-center p-2 my-6 transition-colors  duration-200  text-gray-600  rounded-lg "
								onClick={() => navigate("/admin/dashboard")}>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="m-auto"
									viewBox="0 0 2048 1792"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
								</svg>
								<span className="mx-4 text-lg font-normal">Dashboard</span>
								<span className="flex-grow text-right"></span>
							</a>
							<a
								className="hover:text-gray-800 cursor-pointer hover:bg-emerald-100 flex items-center p-2 my-6 transition-colors duration-200  text-gray-800 rounded-lg  "
								onClick={() => navigate("/admin/donasi")}>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="m-auto"
									viewBox="0 0 2048 1792"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
								</svg>
								<span className="mx-4 text-lg font-normal">Donasi</span>
								<span className="flex-grow text-right"></span>
							</a>
							<a
								className="hover:text-gray-800 cursor-pointer hover:bg-emerald-100 flex items-center p-2 my-6 transition-colors duration-200  text-gray-600  rounded-lg "
								onClick={() => navigate("/admin/donatur")}>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="m-auto"
									viewBox="0 0 2048 1792"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"></path>
								</svg>
								<span className="mx-4 text-lg font-normal">Donatur</span>
								<span className="flex-grow text-right">
									<button
										type="button"
										className="w-6 h-6 text-xs  rounded-full text-white bg-red-500">
										<span className="p-1">7</span>
									</button>
								</span>
							</a>
							<a
								className="hover:text-gray-800 cursor-pointer hover:bg-emerald-100 flex items-center p-2 my-6 transition-colors   duration-200  text-gray-600  rounded-lg "
								onClick={() => navigate("/")}>
								<svg
									width="20"
									height="20"
									className="m-auto"
									fill="currentColor"
									viewBox="0 0 2048 1792"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
								</svg>
								<span className="mx-4 text-lg font-normal">Landing Page</span>
								<span className="flex-grow text-right"></span>
							</a>
							<a
								className="hover:text-gray-800 cursor-pointer hover:bg-emerald-100 flex items-center p-2 my-6 transition-colors   duration-200  text-gray-600  rounded-lg "
								onClick={handleLogout}>
								<svg
									width="20"
									height="20"
									className="m-auto"
									fill="currentColor"
									viewBox="0 0 2048 1792"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
								</svg>
								<span className="mx-4 text-lg font-normal">Logout</span>
								<span className="flex-grow text-right"></span>
							</a>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
