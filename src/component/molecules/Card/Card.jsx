import React from "react";
import { TbMoneybag } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
function Card({ img, tanggal, judul, terkumpul, donatur, target, uuid }) {
	const persen = Math.floor((terkumpul / target) * 100);
	const navigate = useNavigate();
	return (
		<div className="col-span-4 lg:col-span-3">
			<div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
				<figure>
					<img src={img} alt="card image" className="aspect-video w-full" />
				</figure>
				<div className="p-4">
					<p className="text-slate-400 text-xs">{tanggal}</p>
					<h3 className="text-lg font-medium text-slate-700 mb-2">{judul}</h3>
					<p className=" text-xs mb-1">Terkumpul : Rp. {terkumpul}</p>
					<div>
						<span id="ProgressLabel" className="sr-only">
							Loading
						</span>
						<span
							role="progressbar"
							aria-labelledby="ProgressLabel"
							aria-valuenow="50"
							className="block rounded-full bg-gray-200">
							<span
								className="block h-4 rounded-full bg-emerald-500 text-center text-[10px]/4"
								style={{ width: `${persen}%` }}>
								<span className="font-bold text-white">
									{" "}
									{persen > 5 ? `${persen}%` : ""}{" "}
								</span>
							</span>
						</span>
					</div>

					<div className="flex justify-between">
						<div className="text-base">
							<h4>Target</h4>
							<span className="flex items-center text-sm">
								<TbMoneybag />
								Rp. {target}
							</span>
						</div>
						<div className="text-right">
							<h4 className="text-base ">Donatur</h4>
							<span className="text-left text-sm">{donatur}</span>
						</div>
					</div>
				</div>
				<div className="flex justify-end p-6 pt-0">
					<button
						className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
						onClick={() => navigate(`/detaildonasi/${uuid}`)}>
						<span>Detail</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
