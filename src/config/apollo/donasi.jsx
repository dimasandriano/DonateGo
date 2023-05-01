import { gql } from "@apollo/client";

export const getDonationCard = gql`
	subscription getDonationCard {
		donasi {
			uuid
			id
			judul_donasi
			target_donasi
			terkumpul_donasi
			foto_donasi
			timestamp
			history {
				isverif
			}
		}
	}
`;
export const getDetailDonation = gql`
	subscription getDetailDonation($uuid: uuid!) {
		donasi(where: { uuid: { _eq: $uuid } }) {
			id
			judul_donasi
			target_donasi
			terkumpul_donasi
			timestamp
			uuid
			deskripsi_donasi
			foto_donasi
			history {
				nama
				jumlah_donasi
				tanggal_donasi
				isverif
			}
		}
	}
`;
