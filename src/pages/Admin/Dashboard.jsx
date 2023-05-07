import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { useSubscription } from "@apollo/client";
import { getDonationCard } from "../../config/apollo/donasi";
import { getDonaturVerif } from "../../config/apollo/dashboard";
import Loading from "../../component/atoms/Loading/Loading";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const navigate = useNavigate();
	const { loading, data } = useSubscription(getDonationCard);
	const { loading: loadingDonaturVerif, data: dataDonaturVerif } =
		useSubscription(getDonaturVerif);
	const donatur = data?.donasi.map((item) => item);
	const donaturVerif = dataDonaturVerif?.history_donasi.map((item) => item);
	const [donations, setDonations] = useState([]);
	const getTotalHistoryLength = (donation) => {
		return donation.history.length;
	};

	const totalHistoryLength = donations.reduce(
		(acc, donation) => acc + getTotalHistoryLength(donation),
		0
	);

	const handlePageDonasi = () => {
		return navigate("/admin/donasi");
	};
	const handlePageDonatur = () => {
		return navigate("/admin/donatur");
	};

	useEffect(() => {
		if (data) {
			setDonations(data?.donasi);
		}
	}, [data]);
	return (
		<div>
			<AdminLayout>
				<h1 className="px-5 text-4xl mt-8 font-bold text-emerald-400">
					Welcome Admin
				</h1>
				<div className="grid gap-6 grid-cols-12 px-5 py-9">
					<div className="col-span-3">
						<div
							className="pl-1 w-full h-20 bg-pink-400 rounded-lg shadow-md border border-pink-300 cursor-pointer hover:scale-105 transition"
							onClick={handlePageDonatur}>
							<div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
								<div className="my-auto">
									<p className="font-bold">Donatur</p>
									<p className="text-lg">
										{loading ? <Loading css="w-5 -ml-10" /> : totalHistoryLength}
									</p>
								</div>
								<div className="my-auto flex items-center justify-center w-10 h-10 text-pink-700 bg-pink-100 rounded">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="flex-none w-5 h-5">
										<path
											fillRule="evenodd"
											d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-3">
						<div
							className="pl-1 w-full h-20 bg-emerald-400 rounded-lg shadow-md border border-emerald-300 cursor-pointer hover:scale-105 transition"
							onClick={handlePageDonatur}>
							<div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
								<div className="my-auto">
									<p className="font-bold">Terverif/Sukses</p>
									<p className="text-lg">
										{loadingDonaturVerif ? (
											<Loading css="w-5 -ml-24" />
										) : (
											donaturVerif?.length
										)}
									</p>
								</div>
								<div className="my-auto flex items-center justify-center w-10 h-10 text-green-700 bg-green-100 rounded">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="flex-none w-5 h-5">
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-3">
						<div
							className="pl-1 w-full h-20 bg-pink-400 rounded-lg shadow-md border border-pink-300 cursor-pointer hover:scale-105 transition"
							onClick={handlePageDonatur}>
							<div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
								<div className="my-auto">
									<p className="font-bold">Tidak Verif/Gagal</p>
									<p className="text-lg">
										{loading || loadingDonaturVerif ? (
											<Loading css="w-5 -ml-28" />
										) : (
											totalHistoryLength - donaturVerif?.length
										)}
									</p>
								</div>
								<div className="my-auto flex items-center justify-center w-10 h-10 text-red-700 bg-red-100 rounded">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="flex-none w-5 h-5">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-3">
						<div
							className="pl-1 w-full h-20 bg-yellow-400 rounded-lg shadow-md border border-yellow-300 cursor-pointer hover:scale-105 transition"
							onClick={handlePageDonasi}>
							<div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
								<div className="my-auto">
									<p className="font-bold">Tempat Donasi</p>
									<p className="text-lg">
										{loading ? <Loading css="w-5 -ml-24" /> : donatur?.length}
									</p>
								</div>
								<div className="my-auto flex items-center justify-center w-10 h-10 text-yellow-700 bg-yellow-100 rounded">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="flex-none w-5 h-5">
										<path
											fillRule="evenodd"
											d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
											clipRule="evenodd"
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
