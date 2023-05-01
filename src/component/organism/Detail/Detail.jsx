import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../molecules/Modal/Modal";

function Detail({ donasi }) {
	const navigate = useNavigate();
	const hasil = donasi?.terkumpul_donasi - donasi?.target_donasi;
	return (
		<div className="relative">
			<div className="absolute bg-gradient-to-tr from-emerald-200 via-emerald-100/50 to-white w-full h-full -z-10 blur-sm"></div>
			<div className="mx-auto max-w-screen-xl px-4 py-12">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
					<div className="col-span-4 lg:col-span-8 ">
						<div className="bg-white rounded-lg shadow p-6">
							<button
								className="bg-emerald-400 hover:bg-emerald-500 rounded text-white px-3 py-2 mb-3"
								onClick={() => navigate(-1)}>
								Kembali
							</button>
							<h1 className="text-xl font-semibold tracking-wide">
								{donasi?.judul_donasi}
							</h1>
							<span className="text-slate-400 text-sm mb-3 block">
								{moment(donasi?.timestamp).format("DD MMMM YYYY")}
							</span>
							<div className=" rounded-lg overflow-hidden h-56 lg:h-80 mb-3">
								<img src={donasi?.foto_donasi} alt="" className="w-full" />
							</div>
							<h2 className="text-emerald-500 text-lg font-normal">Judul</h2>
							<p className="text-lg font-semibold mb-3">{donasi?.judul_donasi}</p>
							<h2 className="text-emerald-500 text-lg font-normal">Deskripsi</h2>
							<p className="break-all">{donasi?.deskripsi_donasi}</p>
						</div>
					</div>
					<div className="col-span-4">
						<div className="bg-white rounded-lg shadow p-4 mb-3">
							<h2 className="text-lg font-semibold mb-2">Informasi</h2>
							<div className="rounded bg-slate-100 p-4">
								<div className="flex justify-between">
									<h3>Terkumpul</h3>
									<span>Rp. {donasi?.terkumpul_donasi}</span>
								</div>
								<div className="flex justify-between">
									<h3>Target</h3>
									<span>Rp. {donasi?.target_donasi}</span>
								</div>
								<hr />
								<div className="flex justify-between">
									<h3>Hasil</h3>
									<span>
										{hasil && hasil > 0 ? `+ Rp. ${hasil}` : `- Rp. ${Math.abs(hasil)}`}
									</span>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow p-4 mb-3">
							<Modal
								text="Donasi Sekarang"
								judul="Yuk Donasi"
								isi="loeremasdjnoasjdnoasdno"
							/>
						</div>
						<div className="bg-white rounded-lg shadow p-4">
							<h2 className="text-base font-medium">Histori Donatur</h2>
							<ul className="divide-y divide-slate-100">
								{donasi?.history.map((item, idx) => (
									<li className="flex items-center gap-4 py-3" key={idx}>
										<div className="flex items-center self-center shrink-0">
											<img
												src="https://tailwindmix.b-cdn.net/products/product-shoe-01.jpeg"
												alt="product image"
												className="w-14 rounded"
											/>
										</div>
										<div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center flex-1 min-w-0">
											<h4 className="w-full text-base truncate text-slate-700">
												{item.nama}
											</h4>
											<p className="w-full text-xs text-slate-500">
												{moment(item.tanggal_donasi).format("DD MMMM YYYY")} <br />
												<span
													className={`${item.isverif ? "bg-emerald-400" : "bg-red-400"}
												 rounded-md text-white px-1
												`}>
													{item.isverif ? "Verif" : "Unverif"}
												</span>
											</p>
										</div>
										<div className="text-xs text-slate-400">Rp {item.jumlah_donasi}</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;
