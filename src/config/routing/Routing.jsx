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
		isPrivate: false,
	},
	{
		path: "/detaildonasi/:uuid",
		element: <DetailDonasi />,
		isPrivate: false,
	},
	{
		path: "/login",
		element: <Login />,
		isPrivate: false,
	},
	{
		path: "/admin/dashboard",
		element: <Dashboard />,
		isPrivate: true,
	},
	{
		path: "/admin/donasi",
		element: <AdminDonasi />,
		isPrivate: true,
	},
	{
		path: "/admin/donasi/:uuid",
		element: <AdminEditDonasi />,
		isPrivate: true,
	},
	{
		path: "/admin/donatur",
		element: <AdminDonatur />,
		isPrivate: true,
	},
];
