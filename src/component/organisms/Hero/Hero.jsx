import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
	return (
		<div>
			<section className="bg-transparent relative">
				<div className="absolute bg-gradient-to-tr from-emerald-200 via-white to-white w-full h-full -z-10 blur-sm"></div>
				<div className="mx-auto max-w-screen-xl px-4 md:py-24 py-10  lg:flex lg:items-center">
					<div className="mx-auto max-w-3xl text-center ">
						<h1 className="text-3xl font-bold sm:text-5xl tracking-wider">
							Donasi
							<span className="bg-emerald-500 bg-clip-text text-transparent ml-3">
								<TypeAnimation
									sequence={[
										"Online",
										1000,
										"Aman",
										1000,
										"Cepat",
										1000,
										"Terpercaya",
										1000,
										"Transparan",
										1000,
										"Instan",
										1000,
									]}
									speed={10}
									repeat={Infinity}
								/>
							</span>
							<br />
							Dengan <br />
							<span className="bg-emerald-500 bg-clip-text text-transparent">
								Teknologi Terkini.
							</span>
						</h1>

						<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
							<TypeAnimation
								sequence={[
									`"Berdonasi mudah dan aman dengan DonateGo."`,
									1000,
									`"Donasi Anda membuat dampak besar melalui DonateGo."`,
									1000,
									`"Bergabunglah dengan komunitas DonateGo untuk membuat perbedaan."`,
									1000,
									`"Bangun dunia yang lebih baik dengan berdonasi melalui DonateGo."`,
									1000,
									`"Bantu tujuan Anda dengan DonateGo - mudah dan cepat."`,
									1000,
								]}
								speed={40}
								style={{ fontSize: "1em" }}
								repeat={Infinity}
								deletionSpeed={90}
							/>
						</p>

						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<a
								className="block w-full rounded border border-emerald-600 bg-emerald-500 px-12 py-3 text-sm font-medium text-white hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
								href="#">
								Get Started
							</a>

							<a
								className="block w-full rounded border border-emerald-600 px-12 py-3 text-sm font-medium text-emerald-600 hover:text-white hover:bg-emerald-500 focus:outline-none focus:ring active:bg-emerald-500 sm:w-auto"
								href="#">
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
