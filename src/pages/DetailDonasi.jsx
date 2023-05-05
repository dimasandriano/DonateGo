import React from "react";
import { useParams } from "react-router-dom";
import Detail from "../component/organisms/Detail/Detail";
import { useQuery, useSubscription } from "@apollo/client";
import { getDetailDonation } from "../config/apollo/donasi";
import RootLayout from "../layout/RootLayout";

function DetailDonasi() {
	const { uuid } = useParams();
	const { loading: loadingDetail, data } = useSubscription(getDetailDonation, {
		variables: { uuid },
	});
	const donasi = data?.donasi[0];
	return (
		<div>
			<RootLayout>
				<Detail donasi={donasi} loading={loadingDetail} />
			</RootLayout>
		</div>
	);
}

export default DetailDonasi;
