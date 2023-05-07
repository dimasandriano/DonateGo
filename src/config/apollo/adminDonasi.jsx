import { gql } from "@apollo/client";

export const getDonasiAdmin = gql`
	subscription getDonasiAdmin($judul: String!, $limit: Int!) {
		donasi(
			order_by: { id: asc }
			where: { judul_donasi: { _ilike: $judul } }
			limit: $limit
		) {
			id
			judul_donasi
			target_donasi
			terkumpul_donasi
			foto_donasi
			timestamp
			uuid
		}
	}
`;
export const insertDonationInAdmin = gql`
	mutation insertDonationInAdmin(
		$judul_donasi: String!
		$target_donasi: Int!
		$foto_donasi: String!
		$deskripsi_donasi: String!
	) {
		insert_donasi_one(
			object: {
				judul_donasi: $judul_donasi
				target_donasi: $target_donasi
				foto_donasi: $foto_donasi
				deskripsi_donasi: $deskripsi_donasi
			}
		) {
			id
		}
	}
`;

export const deleteDonationById = gql`
	mutation deleteDonationById($id: Int!) {
		delete_donasi_by_pk(id: $id) {
			id
		}
	}
`;

export const getDetailDonationByUUid = gql`
	query getDetailDonationByUUid($uuid: uuid!) {
		donasi(where: { uuid: { _eq: $uuid } }) {
			id
			judul_donasi
			target_donasi
			deskripsi_donasi
			foto_donasi
			uuid
		}
	}
`;
export const updateDonationByUuid = gql`
	mutation updateDonationByUuid(
		$uuid: uuid!
		$judul_donasi: String!
		$target_donasi: Int!
		$foto_donasi: String!
		$deskripsi_donasi: String!
	) {
		update_donasi(
			where: { uuid: { _eq: $uuid } }
			_set: {
				judul_donasi: $judul_donasi
				target_donasi: $target_donasi
				foto_donasi: $foto_donasi
				deskripsi_donasi: $deskripsi_donasi
			}
		) {
			affected_rows
		}
	}
`;
export const getDonaturUnverif = gql`
	subscription getDonaturUnverif {
		history_donasi(where: { isverif: { _eq: false } }) {
			id_history
		}
	}
`;
export const deleteDonaturByIdDonation = gql`
	mutation deleteDonaturByIdDonation($id: Int!) {
		delete_history_donasi(where: { id_donasi: { _eq: $id } }) {
			affected_rows
		}
	}
`;
