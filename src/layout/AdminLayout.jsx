import React from "react";
import Sidebar from "../component/organisms/SideBar/Sidebar";

function AdminLayout({ children }) {
	return (
		<div>
			<div className="absolute bg-gradient-to-tl from-emerald-200 via-white to-white w-full h-full -z-10 blur-sm"></div>
			<div className="grid grid-cols-4 gap-1 md:grid-cols-8 lg:grid-cols-12">
				<div className="col-span-4 md:col-span-3 border">
					<Sidebar />
				</div>
				<div className="col-span-4 md:col-span-9">{children}</div>
			</div>
		</div>
	);
}

export default AdminLayout;
