import React from "react";
import Card from "../../molecules/Card/Card";

function Donasi() {
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-5 mb-10">
			<h1 className="mb-5 text-3xl font-semibold leading-tight text-gray-900">
				Donasi Terbuka
			</h1>
			<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
				<Card
					img={"https://picsum.photos/id/493/800/600"}
					tanggal={"15 Maret 2023"}
					judul={"Save Water, Save Lives: A Campaign for Water Crisis Relief"}
					terkumpul={100000}
					donatur={10}
					target={500000}
				/>
				<Card
					img={"https://picsum.photos/id/493/800/600"}
					tanggal={"15 Maret 2023"}
					judul={"Save Water, Save Lives: A Campaign for Water Crisis Relief"}
					terkumpul={100000}
					donatur={10}
					target={500000}
				/>
				<Card
					img={"https://picsum.photos/id/493/800/600"}
					tanggal={"15 Maret 2023"}
					judul={"Save Water, Save Lives: A Campaign for Water Crisis Relief"}
					terkumpul={100000}
					donatur={10}
					target={500000}
				/>
				<Card
					img={"https://picsum.photos/id/493/800/600"}
					tanggal={"15 Maret 2023"}
					judul={"Save Water, Save Lives: A Campaign for Water Crisis Relief"}
					terkumpul={100000}
					donatur={10}
					target={500000}
				/>
			</div>
		</div>
	);
}

export default Donasi;
