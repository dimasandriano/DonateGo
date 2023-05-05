import { gql } from "@apollo/client";

export const getDonationCard = gql`
	subscription getDonationCard {
		donasi(order_by: { id: asc }) {
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
			history(limit: 5, order_by: { timestamp: desc }) {
				nama
				jumlah_donasi
				tanggal_donasi
				isverif
			}
		}
	}
`;
export const insertHistoryDonation = gql`
	mutation insertHistoryDonation(
		$id_donasi: Int!
		$nama: String!
		$email: String!
		$nohp: bigint!
		$bukti_donasi: String!
		$jumlah_donasi: numeric!
	) {
		insert_history_donasi_one(
			object: {
				id_donasi: $id_donasi
				nama: $nama
				email: $email
				nohp: $nohp
				jumlah_donasi: $jumlah_donasi
				bukti_donasi: $bukti_donasi
			}
		) {
			id_history
		}
	}
`;
