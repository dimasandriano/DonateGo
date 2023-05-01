import React from "react";
import loadingAnimate from "../../../assets/loading.svg";
function Loading() {
	return (
		<div className="flex justify-center">
			<img src={loadingAnimate} alt="" className="w-20" />
		</div>
	);
}

export default Loading;
