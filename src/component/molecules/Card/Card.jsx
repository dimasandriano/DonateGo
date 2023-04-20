import React from "react";
import { TbMoneybag } from "react-icons/tb";
function Card({ img, tanggal, judul, terkumpul, donatur, target }) {
	return (
		<>
			<div className="col-span-4 lg:col-span-3">
				<div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
					<figure>
						<img src={img} alt="card image" className="aspect-video w-full" />
					</figure>
					<div className="p-4">
						<p className="text-slate-400 text-xs">{tanggal}</p>
						<h3 className="text-lg font-medium text-slate-700 mb-2">{judul}</h3>
						<p className=" text-xs">Terkumpul : Rp. {terkumpul}</p>
						<div className="relative w-full mb-2">
							<label
								id="p01d-label"
								htmlFor="p01d"
								className="absolute top-0 left-0 block mb-0 text-xs text-center text-white">
								<span className="sr-only">Dana</span>{" "}
							</label>
							<progress
								aria-labelledby="p01d-label"
								id="p01d"
								max={target}
								value={terkumpul}
								className="block w-full rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-emerald-500 [&::-moz-progress-bar]:bg-emerald-500"></progress>
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
						<button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
							<span>Detail</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
