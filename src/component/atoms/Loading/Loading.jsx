import React from "react";
import loadingAnimate from "../../../assets/loading.svg";
function Loading({ css }) {
	return (
		<div className="flex justify-center">
			<img src={loadingAnimate} alt="" className={css} />
		</div>
	);
}

export default Loading;
