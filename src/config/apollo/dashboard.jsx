import { gql } from "@apollo/client";

export const getDonatur = gql`
	subscription getDonatur {
		history_donasi {
			id_history
		}
	}
`;
export const getDonaturVerif = gql`
	subscription getDonaturVerif {
		history_donasi(where: { isverif: { _eq: true } }) {
			isverif
		}
	}
`;
