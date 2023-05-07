import React from "react";
import {
	AdminDonasi,
	AdminDonatur,
	AdminEditDonasi,
	Dashboard,
	DetailDonasi,
	Donatur,
	LandingPage,
	Login,
} from "../../pages";
import AdminEditDonatur from "../../pages/Admin/AdminEditDonatur";

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
		path: "/donatur",
		element: <Donatur />,
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
		path: "/admin/donatur/:id",
		element: <AdminEditDonatur />,
		isPrivate: true,
	},
	{
		path: "/admin/donatur",
		element: <AdminDonatur />,
		isPrivate: true,
	},
];
