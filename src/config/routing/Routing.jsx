import React from "react";
import {
	AdminDonasi,
	AdminDonatur,
	AdminEditDonasi,
	Dashboard,
	DetailDonasi,
	LandingPage,
	Login,
} from "../../pages";

export const Routing = [
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/detaildonasi/:uuid",
		element: <DetailDonasi />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/admin/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/admin/donasi",
		element: <AdminDonasi />,
	},
	{
		path: "/admin/donasi/:uuid",
		element: <AdminEditDonasi />,
	},
	{
		path: "/admin/donatur",
		element: <AdminDonatur />,
	},
];
