import { apiURL } from '/api/apiURL.js';

export const getUser = async (id) => {
	try {
		const res = await apiURL.get(`/api/users/${id}`, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateUser = async (id, values) => {
	try {
		const res = await apiURL.put(`/api/users/${id}`, values, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const createPago = async (pagoData, id) => {
	try {
		const response = await apiURL.post(`/api/users/${id}/pagos`, pagoData, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};



