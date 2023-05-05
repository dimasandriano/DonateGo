import React from "react";
import AdminLayout from "../../layout/AdminLayout";

function Dashboard() {
	return (
		<div>
			<AdminLayout>
				<div className="grid gap-6 grid-cols-12 px-5 py-10">
					<div className="col-span-4">
						<div className="pl-1 w-full h-20 bg-green-400 rounded-lg shadow-md border border-emerald-400">
							<div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
								<div className="my-auto">
									<p className="font-bold">EARNINGS (MONTHLY)</p>
									<p className="text-lg">$40,000</p>
								</div>
								<div className="my-auto">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-4">
						<div className="pl-1 w-full h-20 bg-green-400 rounded-lg shadow-md border border-emerald-400">
							<div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
								<div className="my-auto">
									<p className="font-bold">EARNINGS (MONTHLY)</p>
									<p className="text-lg">$40,000</p>
								</div>
								<div className="my-auto">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-4">
						<div className="pl-1 w-full h-20 bg-green-400 rounded-lg shadow-md border border-emerald-400">
							<div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
								<div className="my-auto">
									<p className="font-bold">EARNINGS (MONTHLY)</p>
									<p className="text-lg">$40,000</p>
								</div>
								<div className="my-auto">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</AdminLayout>
		</div>
	);
}

export default Dashboard;
