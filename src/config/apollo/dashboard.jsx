import { gql } from "@apollo/client";

export const getDonatur = gql`
	subscription getDonatur($limit: Int!, $nama: String!) {
		history_donasi(
			order_by: { id_history: asc }
			where: { nama: { _ilike: $nama } }
			limit: $limit
		) {
			nama
			email
			nohp
			jumlah_donasi
			bukti_donasi
			tanggal_donasi
			isverif
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

export const deleteDonaturById = gql`
	mutation deleteDonaturById($id: Int!) {
		delete_history_donasi_by_pk(id_history: $id) {
			id_history
		}
	}
`;

export const switchVerif = gql`
	mutation switchVerif($id: Int!, $isverif: Boolean!) {
		update_history_donasi_by_pk(
			pk_columns: { id_history: $id }
			_set: { isverif: $isverif }
		) {
			id_history
		}
	}
`;
export const getDetailDonatur = gql`
	query getDetailDonatur($id: Int!) {
		history_donasi_by_pk(id_history: $id) {
			id_history
			nama
			email
			nohp
			jumlah_donasi
			bukti_donasi
			tanggal_donasi
			isverif
		}
	}
`;
export const updateDonatur = gql`
	mutation updateDonatur(
		$id: Int!
		$nama: String!
		$email: String!
		$nohp: bigint!
		$jumlah_donasi: numeric!
		$bukti_donasi: String!
		$isverif: Boolean!
	) {
		update_history_donasi_by_pk(
			pk_columns: { id_history: $id }
			_set: {
				nama: $nama
				email: $email
				nohp: $nohp
				jumlah_donasi: $jumlah_donasi
				bukti_donasi: $bukti_donasi
				isverif: $isverif
			}
		) {
			id_history
		}
	}
`;
